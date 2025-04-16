'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Building2, ArrowLeft } from "lucide-react";
import ProjectsList from '@/components/client/project-list';
import ProjectProgress from '@/components/client/project-progress-updates';
import ProjectCosts from '@/components/client/project-cost';

export default function ClientDashboard() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>('');

  const handleBack = () => {
    setSelectedProjectId('');
  };

  if (!selectedProjectId) {
    return (
      <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen p-6">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-3 text-2xl font-bold text-blue-600">
              <Building2 className="w-6 h-6" />
              My Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ProjectsList onProjectSelect={setSelectedProjectId} />
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen p-6">
      <Card className="max-w-6xl mx-auto">
        <CardHeader className="border-b">
          <div className="flex items-center">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Projects
            </button>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column - Progress Updates */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800">Progress Updates</h2>
              <ScrollArea className="h-[calc(100vh-300px)]">
                <ProjectProgress projectId={selectedProjectId} />
              </ScrollArea>
            </div>

            {/* Right Column - Cost Analysis */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800">Cost Analysis</h2>
              <ScrollArea className="h-[calc(100vh-300px)]">
                <ProjectCosts projectId={selectedProjectId} />
              </ScrollArea>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}