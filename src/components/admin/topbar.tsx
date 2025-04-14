export default function Topbar() {
    return (
      <div className="bg-white border-b p-4 shadow-sm flex justify-between items-center">
        <h1 className="text-xl font-semibold text-blue-700">Welcome, Admin</h1>
        <button className="text-sm text-blue-600 hover:underline">Logout</button>
      </div>
    );
  }
  