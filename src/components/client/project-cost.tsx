'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { IndianRupee, TrendingUp, Receipt, Clipboard, Building } from "lucide-react";
import Image from 'next/image';

interface Ticket {
  _id: string;
  title: string;
  description: string;
  status: string;
  estimatedCost: number;
  createdAt: string;
  images?: string[];
}

interface ProjectCostData {
  projectId: string;
  siteAddress: string;
  tickets: Ticket[];
  totalCost: number;
  ticketCount: number;
}

export default function ProjectCosts({ projectId }: { projectId: string }) {
  const [costData, setCostData] = useState<ProjectCostData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (projectId) {
      fetchCosts();
    }
  }, [projectId]);

  const fetchCosts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/client/costs?projectId=${projectId}`);
      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.message || 'Failed to fetch cost data');
      }
      
      setCostData(result.data);
    } catch (err) {
      console.error('Error loading costs:', err);
      setError(err instanceof Error ? err.message : 'An error occurred while fetching costs');
      setCostData(null);
    } finally {
      setIsLoading(false);
    }
  };

  if (!projectId) {
    return (
      <div className="text-center py-8 text-gray-500">
        Please select a project to view costs
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-6">
              <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
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
          <h3 className="text-lg font-semibold text-red-600">Error</h3>
          <p className="text-red-500">{error}</p>
        </CardContent>
      </Card>
    );
  }

  if (!costData) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-center py-4 text-gray-500">
            No cost data available for this project
          </div>
        </CardContent>
      </Card>
    );
  }

  const { totalCost, tickets, siteAddress } = costData;

  // Group tickets by similar types for category summary
  const categoryGroups = tickets.reduce((acc, ticket) => {
    // Using the title as a simple categorization method
    // In a real app, you might have a dedicated category field
    const category = ticket.title.split(' ')[0]; // Simple categorization by first word
    if (!acc[category]) {
      acc[category] = 0;
    }
    acc[category] += ticket.estimatedCost;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="space-y-6">
      {/* Project info */}
      <Card className="bg-gradient-to-r from-blue-500 to-blue-600">
        <CardContent className="p-6">
          <div className="flex items-center justify-between text-white">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Building className="w-4 h-4 opacity-80" />
                <p className="text-sm opacity-90">{siteAddress}</p>
              </div>
              <p className="text-sm opacity-90">Total Approved Cost</p>
              <h3 className="text-3xl font-bold">₹{totalCost.toLocaleString()}</h3>
            </div>
            <IndianRupee className="w-8 h-8 opacity-80" />
          </div>
        </CardContent>
      </Card>

      {/* Category breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(categoryGroups).map(([category, amount]) => (
          <Card key={category}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{category}</p>
                  <p className="text-lg font-semibold">₹{amount.toLocaleString()}</p>
                </div>
                <TrendingUp className="w-5 h-5 text-blue-500" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent transactions (tickets) */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Approved Costs ({tickets.length})</h3>
          <div className="space-y-6">
            {Array.isArray(tickets) && tickets.length > 0 ? (
              tickets.map((ticket) => (
                <div key={ticket._id} className="py-4 border-b last:border-0">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <Receipt className="w-5 h-5 text-gray-500" />
                      <div>
                        <p className="font-medium">{ticket.title}</p>
                        <p className="text-sm text-gray-600">{new Date(ticket.createdAt).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <p className="font-semibold">₹{ticket.estimatedCost.toLocaleString()}</p>
                  </div>
                  
                  <p className="text-gray-700 mb-3 text-sm">{ticket.description}</p>
                  
                  {/* Images grid */}
                  {ticket.images && ticket.images.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
                      {ticket.images.map((imageSrc, index) => (
                        <div key={index} className="relative w-full h-24 bg-gray-100 rounded overflow-hidden">
                          <Image 
                            src={imageSrc} 
                            alt={`Image for ${ticket.title}`} 
                            fill 
                            className="object-cover" 
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-4 text-gray-500">
                No approved costs found
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}