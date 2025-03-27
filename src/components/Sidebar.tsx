"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { Users, PackageSearch, Newspaper, Layers} from "lucide-react";
import Image from "next/image";
import Logo from "../../public/assets/logo.png";  

export default function Sidebar() {
  const dispatch = useDispatch<AppDispatch>();
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <div className={`w-64 bg-black text-white ${isOpen ? "block" : "hidden"}`}>
      <div className="flex justify-center h-auto">
        <Image
          src={Logo}
          alt="DeliFres+"
          width={200}
          height={200}
          className="object-contain mt-4"
        />
      </div>
      <ul id="menu-main" className="space-y-2 mt-4">
        {/* Dropdown 1: Quản lý người dùng */}
        <li>
          <button
            className="w-full flex justify-between items-center p-2 hover:bg-gray-700"
            onClick={() => toggleDropdown("users")}
          >
           <Users></Users>Quản lý người dùng <ChevronDown size={16} />
          </button>
          {openDropdown === "users" && (
            <ul>
              <li className="p-2 hover:bg-gray-700">Thêm người dùng</li>
              <li className="p-2 hover:bg-gray-700">Danh sách người dùng</li>
            </ul>
          )}
        </li>

        {/* Dropdown 2: Quản lý sản phẩm */}
        <li>
          <button
            className="w-full flex justify-between items-center p-2 hover:bg-gray-700"
            onClick={() => toggleDropdown("products")}
          >
            <PackageSearch></PackageSearch>Quản lý sản phẩm <ChevronDown size={16} />
          </button>
          {openDropdown === "products" && (
            <ul>
              <li className="p-2 hover:bg-gray-700">Thêm sản phẩm</li>
              <li className="p-2 hover:bg-gray-700">Danh sách sản phẩm</li>
            </ul>
          )}
        </li>

        {/* Dropdown 3: Quản lý bài viết */}
        <li>
          <button
            className="w-full flex justify-between items-center p-2 hover:bg-gray-700"
            onClick={() => toggleDropdown("posts")}
          >
            <Newspaper></Newspaper>Quản lý bài viết <ChevronDown size={16} />
          </button>
          {openDropdown === "posts" && (
            <ul>
              <li className="p-2 hover:bg-gray-700">Viết bài mới</li>
              <li className="p-2 hover:bg-gray-700">Danh sách bài viết</li>
            </ul>
          )}
        </li>

        {/* Dropdown 4: Quản lý trang */}
        <li>
          <button
            className="w-full flex justify-between items-center p-2 hover:bg-gray-700"
            onClick={() => toggleDropdown("page")}
          >
            <Layers></Layers>Quản lý trang <ChevronDown size={16} />
          </button>
          {openDropdown === "page" && (
            <ul>
              <li className="p-2 hover:bg-gray-700">Tạo trang mới</li>
              <li className="p-2 hover:bg-gray-700">Danh sách trang</li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}
