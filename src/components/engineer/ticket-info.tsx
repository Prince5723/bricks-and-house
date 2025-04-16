'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

interface Ticket {
  _id: string;
  title: string;
  description: string;
  status: string;
  projectId: {
    siteAddress: string;
  };
  createdAt: string;
}

export default function TicketInfo() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const response = await axios.get('/api/engineer/tickets');
      setTickets(response.data.data || []);
    } catch (err) {
      toast.error('Error loading tickets');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardContent className="p-4">
              <div className="animate-pulse space-y-3">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/4"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {tickets.length === 0 ? (
        <p className="text-center text-gray-500">No tickets found.</p>
      ) : (
        tickets.map((ticket) => (
          <Card key={ticket._id}>
            <CardContent className="p-4">
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-blue-600">{ticket.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    ticket.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    ticket.status === 'approved' ? 'bg-green-100 text-green-800' :
                    ticket.status === 'rejected' ? 'bg-red-100 text-red-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {ticket.status.charAt(0).toUpperCase() + ticket.status.slice(1)}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{ticket.description}</p>
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>Site: {ticket.projectId.siteAddress}</span>
                  <span>Created: {new Date(ticket.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}