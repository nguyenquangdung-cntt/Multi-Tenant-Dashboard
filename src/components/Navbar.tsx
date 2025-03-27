"use client";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { toggleSidebar } from "../store/features/sidebarSlice";
import { Menu } from "lucide-react"; // Import icon từ lucide-react

export default function Navbar() {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <nav className="bg-blue-600 p-4 flex items-center justify-between">
      <button
        onClick={() => dispatch(toggleSidebar())}
        className="text-white p-2"
      >
        <Menu size={24} />
      </button>
      <h1 className="text-white text-lg font-semibold">Dashboard</h1>
    </nav>
  );
}
