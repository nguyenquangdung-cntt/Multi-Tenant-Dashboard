"use client";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function DashboardPage() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-4 bg-white">
          <h2 className="text-xl font-bold">Welcome to Dashboard</h2>
          <p className="text-gray-600">This is a sample dashboard page.</p>
        </main>
      </div>
    </div>
  );
}
