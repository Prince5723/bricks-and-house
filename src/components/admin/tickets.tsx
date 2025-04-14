'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Tickets() {
  const [tickets, setTickets] = useState([]);

  const fetchTickets = async () => {
    const res = await axios.get('/api/admin/tickets');
    setTickets(res.data);
  };

  const handleAction = async (id: string, status: 'approved' | 'rejected') => {
    await axios.post(`/api/admin/tickets/${id}/status`, { status });
    fetchTickets();
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Tickets</h2>
      <div className="space-y-4">
        {tickets.map((t: any) => (
          <div key={t._id} className="p-4 border rounded-lg">
            <p><strong>Item:</strong> {t.item}</p>
            <p><strong>Project:</strong> {t.projectTitle}</p>
            <p><strong>Status:</strong> {t.status}</p>
            <div className="mt-2 space-x-2">
              <button onClick={() => handleAction(t._id, 'approved')} className="btn-blue">Approve</button>
              <button onClick={() => handleAction(t._id, 'rejected')} className="btn-red">Reject</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
