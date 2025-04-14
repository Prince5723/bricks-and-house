'use client';

import { useState } from 'react';
import axios from 'axios';

export default function CreateProject() {
  const [form, setForm] = useState({ title: '', clientId: '', engineerId: '' });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/admin/create-project', form);
      setMessage('Project created!');
      setForm({ title: '', clientId: '', engineerId: '' });
    } catch (err) {
      setMessage('Error creating project.');
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Create Project</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" className="input" placeholder="Project Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <input type="text" className="input" placeholder="Client ID" value={form.clientId} onChange={(e) => setForm({ ...form, clientId: e.target.value })} />
        <input type="text" className="input" placeholder="Engineer ID" value={form.engineerId} onChange={(e) => setForm({ ...form, engineerId: e.target.value })} />
        <button type="submit" className="btn-blue">Create</button>
      </form>
      {message && <p className="text-sm mt-2">{message}</p>}
    </div>
  );
}
