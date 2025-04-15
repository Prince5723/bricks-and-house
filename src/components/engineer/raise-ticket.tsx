import { useState } from 'react';
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

interface Project {
  _id: string;
  siteAddress: string;
  clientId: {
    name: string;
  };
  status: string;
}

interface TicketFormProps {
  projects: Project[];
  onSubmit: (ticketData: any) => Promise<boolean>;
  isLoading: boolean;
}

export default function TicketForm({ projects, onSubmit, isLoading }: TicketFormProps) {
  const [ticketForm, setTicketForm] = useState({
    projectId: '',
    title: '',
    description: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await onSubmit(ticketForm);
    if (success) {
      setTicketForm({ projectId: '', title: '', description: '' });
    }
  };

  return (
    <Card>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="projectId">Project</Label>
            <Select
              value={ticketForm.projectId}
              onValueChange={(value) =>
                setTicketForm({ ...ticketForm, projectId: value })
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
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Need things urgently"
              value={ticketForm.title}
              onChange={(e) =>
                setTicketForm({ ...ticketForm, title: e.target.value })
              }
              className="focus-visible:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="50 bags cement, 20 rods, etc"
              value={ticketForm.description}
              onChange={(e) =>
                setTicketForm({
                  ...ticketForm,
                  description: e.target.value
                })
              }
              className="focus-visible:ring-blue-500"
              rows={4}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700"
            disabled={isLoading}
          >
            {isLoading ? 'Submitting...' : 'Raise Ticket'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}