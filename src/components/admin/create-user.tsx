'use client';

import { useState } from 'react';
import axios from 'axios';

export default function CreateUser() {
  const [form, setForm] = useState({ name: '', email: '', role: 'client', password: '' });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/api/admin/create-user', form);
      setMessage('User created successfully!');
      setForm({ name: '', email: '', role: 'client', password: '' });
    } catch (err) {
      setMessage('Error creating user.');
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Create User</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Name" required className="input" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input type="email" placeholder="Email" required className="input" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <select className="input" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}>
          <option value="client">Client</option>
          <option value="engineer">Engineer</option>
        </select>
        <input type="text" placeholder="Password" required className="input" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button type="submit" className="btn-blue">Create</button>
      </form>
      {message && <p className="text-sm mt-2">{message}</p>}
    </div>
  );
}
