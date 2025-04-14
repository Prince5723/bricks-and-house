'use client';

import { useState } from 'react';
import Sidebar from '@/components/admin/sidebar';
import Topbar from '@/components/admin/topbar';
import CreateUser from '@/components/admin/create-user';
import CreateProject from '@/components/admin/create-project';
import Tickets from '@/components/admin/tickets';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('createUser');

  const renderContent = () => {
    switch (activeTab) {
      case 'createUser': return <CreateUser />;
      case 'createProject': return <CreateProject />;
      case 'tickets': return <Tickets />;
      default: return <CreateUser />;
    }
  };

  return (
    <div className="flex min-h-screen bg-blue-50 text-blue-900">
      <Sidebar setActiveTab={setActiveTab} activeTab={activeTab} />
      <div className="flex-1">
        <Topbar />
        <div className="p-6">{renderContent()}</div>
      </div>
    </div>
  );
}
