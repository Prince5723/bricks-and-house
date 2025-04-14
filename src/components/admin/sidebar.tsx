type Props = {
    activeTab: string;
    setActiveTab: (tab: string) => void;
  };
  
  export default function Sidebar({ activeTab, setActiveTab }: Props) {
    return (
      <div className="w-64 bg-blue-600 text-white flex flex-col space-y-4 p-6">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <button
          className={`text-left py-2 px-4 rounded ${activeTab === 'createUser' ? 'bg-blue-800' : 'hover:bg-blue-700'}`}
          onClick={() => setActiveTab('createUser')}
        >
          Create User
        </button>
        <button
          className={`text-left py-2 px-4 rounded ${activeTab === 'createProject' ? 'bg-blue-800' : 'hover:bg-blue-700'}`}
          onClick={() => setActiveTab('createProject')}
        >
          Create Project
        </button>
        <button
          className={`text-left py-2 px-4 rounded ${activeTab === 'tickets' ? 'bg-blue-800' : 'hover:bg-blue-700'}`}
          onClick={() => setActiveTab('tickets')}
        >
          Tickets
        </button>
      </div>
    );
  }
  