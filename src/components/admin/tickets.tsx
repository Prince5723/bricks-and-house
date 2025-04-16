import { useEffect, useState } from 'react';
import axios from 'axios';
import { CheckCircle, XCircle, Loader2, Package, User, Calendar, AlertCircle, MapPin, DollarSign } from 'lucide-react';

interface Ticket {
  _id: string;
  title: string;
  description: string;
  status: 'pending' | 'approved' | 'rejected';
  raisedBy: {
    name: string;
    email: string;
  };
  projectId: {
    siteAddress: string;
  };
  createdAt: string;
  updatedAt: string;
  estimatedCost: number | null;
  approvedBy: string | { _id: string; name: string; email: string; } | null; // Updated to handle both string and object
}

export default function Tickets() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [costs, setCosts] = useState<Record<string, string>>({});

  const fetchTickets = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get('/api/admin/tickets');
      console.log(res.data.data);
      
      // Transform the data to ensure consistency with our interface
      const transformedTickets = res.data.data.map((ticket: any) => ({
        ...ticket,
        // Ensure approvedBy is handled correctly
        approvedBy: ticket.approvedBy || null
      }));
      
      setTickets(transformedTickets);
      setError(null);
    } catch (err) {
      setError('Failed to fetch tickets. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleApprove = async (id: string) => {
    const cost = parseFloat(costs[id]);
    if (isNaN(cost) || cost <= 0) {
      setError('Please enter a valid cost before approving');
      return;
    }

    try {
      await axios.put(`/api/admin/tickets/${id}/approve`, { estimatedCost: cost });
      fetchTickets();
      // Clear the cost input after successful approval
      setCosts(prev => {
        const newCosts = { ...prev };
        delete newCosts[id];
        return newCosts;
      });
    } catch (err) {
      setError('Failed to approve ticket. Please try again.');
    }
  };

  const handleReject = async (id: string) => {
    try {
      await axios.put(`/api/admin/tickets/${id}/reject`);
      fetchTickets();
    } catch (err) {
      setError('Failed to reject ticket. Please try again.');
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  // Helper function to safely render approvedBy
  const renderApprovedBy = (approvedBy: string | { _id: string; name: string; email: string; } | null) => {
    if (!approvedBy) return null;
    
    if (typeof approvedBy === 'string') {
      return approvedBy;
    }
    
    if (approvedBy && typeof approvedBy === 'object' && approvedBy.name) {
      return approvedBy.name;
    }
    
    return 'Unknown';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex items-center space-x-2 text-gray-600">
          <Loader2 className="w-6 h-6 animate-spin" />
          <span>Loading tickets...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-xl shadow-md max-w-md w-full">
          <div className="flex items-center justify-center text-red-500 mb-4">
            <AlertCircle className="w-12 h-12" />
          </div>
          <p className="text-center text-gray-700">{error}</p>
          <button
            onClick={fetchTickets}
            className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors cursor-pointer"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Ticket Management</h2>
        <div className="grid gap-6">
          {tickets.map((ticket) => (
            <div
              key={ticket._id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="space-y-4 flex-1">
                  <div className="flex items-start gap-4">
                    <Package className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{ticket.title}</h3>
                      <p className="text-gray-600 mt-1">{ticket.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <User className="w-5 h-5 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-600">Requested by</p>
                        <p className="font-medium">{ticket.raisedBy.name}</p>
                        <p className="text-sm text-gray-500">{ticket.raisedBy.email}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-600">Site Address</p>
                        <p className="font-medium">{ticket.projectId.siteAddress}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-600">Created on</p>
                        <p className="font-medium">
                          {new Date(ticket.createdAt).toLocaleDateString('en-US', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                      </div>
                    </div>

                    {ticket.estimatedCost && (
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-5 h-5 text-gray-500" />
                        <div>
                          <p className="text-sm text-gray-600">Estimated Cost</p>
                          <p className="font-medium">${ticket.estimatedCost.toLocaleString()}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(ticket.status)}`}>
                      {ticket.status.charAt(0).toUpperCase() + ticket.status.slice(1)}
                    </span>
                    {ticket.approvedBy && (
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">Approved by:</span>
                        <span className="font-medium">{renderApprovedBy(ticket.approvedBy)}</span>
                      </div>
                    )}
                  </div>
                </div>

                {ticket.status === 'pending' && (
                  <div className="flex flex-col gap-3 min-w-[200px]">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-gray-500" />
                      <input
                        type="number"
                        placeholder="Enter cost"
                        value={costs[ticket._id] || ''}
                        onChange={(e) => setCosts(prev => ({ ...prev, [ticket._id]: e.target.value }))}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <button
                      onClick={() => handleApprove(ticket._id)}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                      disabled={!costs[ticket._id]}
                    >
                      <CheckCircle className="w-5 h-5" />
                      Approve
                    </button>
                    <button
                      onClick={() => handleReject(ticket._id)}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors cursor-pointer"
                    >
                      <XCircle className="w-5 h-5" />
                      Reject
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}