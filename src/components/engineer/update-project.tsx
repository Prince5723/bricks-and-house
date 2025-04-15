import { useState } from 'react';
import axios from 'axios';
import {
  Card,
  CardContent
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Upload, X } from "lucide-react";

interface Project {
  _id: string;
  siteAddress: string;
  clientId: {
    name: string;
  };
  status: string;
}

interface UpdateProjectProps {
  projects: Project[];
}

export default function UpdateProject({ projects }: UpdateProjectProps) {
  const [progressForm, setProgressForm] = useState({
    projectId: '',
    description: '',
  });
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [imagePreviewUrls, setImagePreviewUrls] = useState<string[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      
      // Check if total images would exceed 9
      if (selectedImages.length + filesArray.length > 9) {
        toast.error('Maximum 9 images allowed');
        return;
      }
      
      const newImages = [...selectedImages, ...filesArray];
      setSelectedImages(newImages);
      
      // Create preview URLs for the images
      const newPreviewUrls = filesArray.map(file => URL.createObjectURL(file));
      setImagePreviewUrls([...imagePreviewUrls, ...newPreviewUrls]);
    }
  };

  const removeImage = (index: number) => {
    // Release the object URL to avoid memory leaks
    URL.revokeObjectURL(imagePreviewUrls[index]);
    
    setSelectedImages(selectedImages.filter((_, i) => i !== index));
    setImagePreviewUrls(imagePreviewUrls.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!progressForm.projectId) {
      toast.error('Please select a project');
      return;
    }
    
    if (!progressForm.description.trim()) {
      toast.error('Please enter a description');
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Create FormData to handle file uploads
      const formData = new FormData();
      formData.append('projectId', progressForm.projectId);
      formData.append('description', progressForm.description);
      
      // Append each image to the FormData
      selectedImages.forEach((image, index) => {
        formData.append(`images`, image);
      });
      
      // Send the request
      await axios.post('/api/engineer/progress', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      toast.success('Progress update submitted successfully!');
      
      // Reset form
      setProgressForm({ projectId: '', description: '' });
      
      // Clean up image previews
      imagePreviewUrls.forEach(url => URL.revokeObjectURL(url));
      setSelectedImages([]);
      setImagePreviewUrls([]);
      
    } catch (err) {
      toast.error('Error submitting progress update');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="projectId">Project</Label>
            <Select
              value={progressForm.projectId}
              onValueChange={(value) =>
                setProgressForm({ ...progressForm, projectId: value })
              }
            >
              <SelectTrigger className="w-full focus-visible:ring-blue-500">
                <SelectValue placeholder="Select project" />
              </SelectTrigger>
              <SelectContent>
                {projects.map((project) => (
                  <SelectItem key={project._id} value={project._id}>
                    {project.siteAddress}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Progress Description</Label>
            <Textarea
              id="description"
              placeholder="Describe the progress made on the project..."
              value={progressForm.description}
              onChange={(e) =>
                setProgressForm({
                  ...progressForm,
                  description: e.target.value
                })
              }
              className="focus-visible:ring-blue-500"
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="images">Upload Images ({selectedImages.length}/9)</Label>
            <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors">
              <Input
                id="images"
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                className="hidden"
                disabled={selectedImages.length >= 9}
              />
              <label htmlFor="images" className="flex flex-col items-center cursor-pointer">
                <Upload className="w-8 h-8 text-blue-500 mb-2" />
                <span className="text-sm text-gray-600">
                  {selectedImages.length >= 9 
                    ? 'Maximum images reached' 
                    : 'Click to upload images (max 9)'}
                </span>
              </label>
            </div>
          </div>

          {/* Image previews */}
          {imagePreviewUrls.length > 0 && (
            <div className="space-y-2">
              <Label>Image Previews</Label>
              <div className="grid grid-cols-3 gap-2">
                {imagePreviewUrls.map((url, index) => (
                  <div key={index} className="relative rounded-md overflow-hidden h-24">
                    <img 
                      src={url} 
                      alt={`Preview ${index}`} 
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      className="absolute top-1 right-1 bg-red-500 p-1 rounded-full text-white"
                      onClick={() => removeImage(index)}
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700"
            disabled={isLoading}
          >
            {isLoading ? 'Submitting...' : 'Update Progress'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}