"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { toggleSidebar } from "../store/features/sidebarSlice";

export default function Sidebar() {
  const dispatch = useDispatch<AppDispatch>();
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);

  return (
    <div className={`w-64 bg-gray-800 text-white ${isOpen ? "block" : "hidden"}`}>
      <button onClick={() => dispatch(toggleSidebar())}>Toggle Sidebar</button>
      <p>Menu Items...</p>
    </div>
  );
}
