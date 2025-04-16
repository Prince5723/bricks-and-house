'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Image as ImageIcon, Clock, AlertTriangle } from "lucide-react";
import Image from 'next/image';

interface ProgressUpdate {
  _id: string;
  projectId: string;
  uploadedBy: string;
  imageUrls: string[];
  description: string;
  createdAt: string;
  __v: number;
}

export default function ProjectProgressUpdates({ projectId }: { projectId: string }) {
  const [progressUpdates, setProgressUpdates] = useState<ProgressUpdate[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (projectId) {
      fetchProgressUpdates();
    }
  }, [projectId]);

  const fetchProgressUpdates = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/client/progress?projectId=${projectId}`);
      
      // Check if the response is not JSON (could be HTML error page)
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error(`API returned non-JSON response: ${contentType}`);
      }
      
      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.message || 'Failed to fetch progress updates');
      }
      
      setProgressUpdates(Array.isArray(result.data) ? result.data : []);
    } catch (err) {
      console.error('Error loading progress updates:', err);
      setError(err instanceof Error ? err.message : 'An error occurred while fetching progress updates');
      setProgressUpdates([]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!projectId) {
    return (
      <div className="text-center py-8 text-gray-500">
        Please select a project to view progress updates
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2].map((i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-6">
              <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map((j) => (
                  <div key={j} className="h-24 bg-gray-200 rounded"></div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <Card className="bg-red-50 border-red-200">
        <CardContent className="p-6">
          <div className="flex items-center mb-2">
            <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
            <h3 className="text-lg font-semibold text-red-600">Error</h3>
          </div>
          <p className="text-red-500">{error}</p>
          <div className="mt-4 p-3 bg-red-100 rounded-md text-sm">
            <p className="text-red-700">Troubleshooting:</p>
            <ul className="list-disc ml-5 mt-1 text-red-700">
              <li>Verify that the API endpoint is correctly implemented</li>
              <li>Check that your route handler is correctly returning JSON</li>
              <li>Check server logs for additional details</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (progressUpdates.length === 0) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-center py-12">
            <ImageIcon className="w-16 h-16 mx-auto text-gray-300 mb-4" />
            <h3 className="text-lg font-medium text-gray-700">No Progress Updates Yet</h3>
            <p className="text-gray-500 mt-2">
              Updates will appear here when the construction team posts progress.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Construction Progress Updates</h2>
      
      <div className="space-y-6">
        {progressUpdates.map((update) => {
          const updateDate = new Date(update.createdAt);
          const formattedDate = updateDate.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          });
          const formattedTime = updateDate.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
          });
          
          return (
            <Card key={update._id} className="overflow-hidden">
              <CardContent className="p-0">
                {/* Header with date and time */}
                <div className="bg-gray-50 border-b p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{formattedDate}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{formattedTime}</span>
                    </div>
                  </div>
                </div>
                
                {/* Description */}
                <div className="p-4 border-b">
                  <p className="text-gray-800">{update.description}</p>
                </div>
                
                {/* Images */}
                {update.imageUrls && update.imageUrls.length > 0 && (
                  <div className="p-4">
                    <h4 className="text-sm font-medium text-gray-600 mb-3 flex items-center">
                      <ImageIcon className="w-4 h-4 mr-2" />
                      Site Images ({update.imageUrls.length})
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                      {update.imageUrls.map((imageUrl, index) => (
                        <div key={index} className="relative aspect-square bg-gray-100 rounded overflow-hidden">
                          <Image 
                            src={imageUrl} 
                            alt={`Construction update image ${index+1}`} 
                            fill 
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}