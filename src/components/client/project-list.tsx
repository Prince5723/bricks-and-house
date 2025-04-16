'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin, ArrowRight } from "lucide-react";

interface Project {
  _id: string;
  title: string;
  siteAddress: string;
  startDate: string;
  status: string;
}

export default function ProjectsList({ onProjectSelect }: { onProjectSelect: (projectId: string) => void }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/client/projects');
      const data = await response.json();
      setProjects(data.data || []);
    } catch (err) {
      console.error('Error loading projects:', err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-6">
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/3"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {projects.map((project) => (
        <Card 
          key={project._id}
          className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-blue-200"
          onClick={() => onProjectSelect(project._id)}
        >
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
                {project.title}
              </h3>
              <Badge variant="outline" className={
                project.status === 'completed' ? 'bg-green-100 text-green-800' :
                project.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                'bg-yellow-100 text-yellow-800'
              }>
                {project.status}
              </Badge>
            </div>
            <div className="space-y-3 text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span>{project.siteAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span>Started: {new Date(project.startDate).toLocaleDateString()}</span>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <span className="text-blue-600 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                View Details
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
      {!isLoading && projects.length === 0 && (
        <div className="col-span-2 text-center py-12">
          <Building2 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No Projects Found</h3>
          <p className="text-gray-500">You don't have any projects assigned yet.</p>
        </div>
      )}
    </div>
  );
}