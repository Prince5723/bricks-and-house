'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
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
import {
  Briefcase,
  TicketIcon,
  RefreshCw
} from "lucide-react";

// Match your API response structure
interface Project {
  _id: string;
  siteAddress: string;
  clientId: {
    name: string;
  };
  status: string;
}

export default function EngineerDashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [ticketForm, setTicketForm] = useState({
    projectId: '',
    title: '',
    description: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('/api/engineer/projects');
      console.log(response.data);
      setProjects(response.data.data); // Corrected access
    } catch (err) {
      toast.error('Error loading projects');
    }
  };

  const handleTicketSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.post('/api/engineer/tickets', ticketForm);
      toast.success('Ticket raised successfully!');
      setTicketForm({ projectId: '', title: '', description: '' });
    } catch (err) {
      toast.error('Error raising ticket. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-blue-600">
          Engineer Dashboard
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="projects" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="projects" className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              My Projects
            </TabsTrigger>
            <TabsTrigger value="ticket" className="flex items-center gap-2">
              <TicketIcon className="w-4 h-4" />
              Raise a Ticket
            </TabsTrigger>
            <TabsTrigger value="update" className="flex items-center gap-2">
              <RefreshCw className="w-4 h-4" />
              Update Projects
            </TabsTrigger>
          </TabsList>

          {/* My Projects Tab */}
          <TabsContent value="projects">
            <div className="space-y-4">
              {projects.map((project) => (
                <Card key={project._id}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-semibold text-blue-600">
                          {project.siteAddress}
                        </h3>
                        <p className="text-sm text-gray-600">
                          Client: {project.clientId?.name || 'N/A'}
                        </p>
                      </div>
                      <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                        {project.status}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
              {projects.length === 0 && (
                <p className="text-center text-gray-500">No projects assigned yet.</p>
              )}
            </div>
          </TabsContent>

          {/* Raise Ticket Tab */}
          <TabsContent value="ticket">
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleTicketSubmit} className="space-y-4">
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
          </TabsContent>

          {/* Update Projects Tab */}
          <TabsContent value="update">
            <Card>
              <CardContent className="p-6">
                <p className="text-center text-gray-500">
                  Project update feature coming soon.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
