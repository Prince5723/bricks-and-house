'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { FolderPlus } from "lucide-react";

interface User {
  _id: string;
  name: string;
  email: string;
}

export default function CreateProject() {
  const [form, setForm] = useState({ title: '', clientId: '', engineerId: '' });
  const [clients, setClients] = useState<User[]>([]);
  const [engineers, setEngineers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const [clientsRes, engineersRes] = await Promise.all([
          axios.get('/api/users?role=client'),
          axios.get('/api/users?role=engineer')
        ]);
        setClients(clientsRes.data.users);
        setEngineers(engineersRes.data.users);
      } catch (err) {
        toast.error('Error loading users');
      }
    };

    fetchUsers();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.post('/api/admin/create-project', {
        siteAddress: form.title,
        clientId: form.clientId,
        engineerId: form.engineerId
      });
      toast.success('Project created successfully!');
      setForm({ title: '', clientId: '', engineerId: '' });
    } catch (err) {
      toast.error('Error creating project. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-blue-600">
          <FolderPlus className="w-6 h-6" />
          Create Project
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Project Title</Label>
            <Input
              id="title"
              type="text"
              placeholder="Enter project title"
              required
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="focus-visible:ring-blue-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="client">Client</Label>
            <Select
              value={form.clientId}
              onValueChange={(value) => setForm({ ...form, clientId: value })}
            >
              <SelectTrigger className="w-full focus-visible:ring-blue-500">
                <SelectValue placeholder="Select client" />
              </SelectTrigger>
              <SelectContent>
                {clients.map((client) => (
                  <SelectItem key={client._id} value={client._id}>
                    {client.name} ({client.email})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="engineer">Engineer</Label>
            <Select
              value={form.engineerId}
              onValueChange={(value) => setForm({ ...form, engineerId: value })}
            >
              <SelectTrigger className="w-full focus-visible:ring-blue-500">
                <SelectValue placeholder="Select engineer" />
              </SelectTrigger>
              <SelectContent>
                {engineers.map((engineer) => (
                  <SelectItem key={engineer._id} value={engineer._id}>
                    {engineer.name} ({engineer.email})
                  </SelectItem>
                ))}
              </SelectContent>

            </Select>
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 cursor-pointer"
            disabled={isLoading}
          >
            {isLoading ? 'Creating...' : 'Create Project'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
