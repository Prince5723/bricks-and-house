'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import { toast } from "sonner";
import {
  Briefcase,
  TicketIcon,
  RefreshCw
} from "lucide-react";
import ProjectsList from "@/components/engineer/projects";
import TicketForm from "@/components/engineer/raise-ticket";
import UpdateProject from "@/components/engineer/update-project"; // Import the new component

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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('/api/engineer/projects');
      console.log(response.data.data);
      setProjects(response.data.data);
    } catch (err) {
      toast.error('Error loading projects');
    }
  };

  const handleTicketSubmit = async (ticketData:any) => {
    setIsLoading(true);
    try {
      await axios.post('/api/engineer/tickets', ticketData);
      toast.success('Ticket raised successfully!');
      return true;
    } catch (err) {
      toast.error('Error raising ticket. Please try again.');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='bg-blue-50 h-screen'>
    <Card className="w-full max-w-4xl mx-auto ">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-blue-600">
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
            <ProjectsList projects={projects} />
          </TabsContent>

          {/* Raise Ticket Tab */}
          <TabsContent value="ticket">
            <TicketForm 
              projects={projects} 
              onSubmit={handleTicketSubmit} 
              isLoading={isLoading} 
            />
          </TabsContent>

          {/* Update Projects Tab - Now using the new component */}
          <TabsContent value="update">
            <UpdateProject projects={projects} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
    </div>
  );
}