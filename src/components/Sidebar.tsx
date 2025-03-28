"use client";

import { ChevronDown } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { Users, PackageSearch, Newspaper, Layers, Images, LayoutDashboard} from "lucide-react";
import Image from "next/image";
import Logo from "../../public/assets/image/logo.png";  
import { toggleDropdown } from "@/store/features/menuSlice";

export default function Sidebar() {
  const dispatch = useDispatch<AppDispatch>();
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  const openDropdown = useSelector((state: RootState) => state.menu.openDropdown);

  return (
    <div className={`w-64 bg-black text-white ${isOpen ? "block" : "hidden"}`}>
      <div className="flex justify-center h-auto">
        <Image
          src={Logo}
          alt="DeliFres+"
          width={220}
          height={220}
          className="object-contain mt-4"
        />
      </div>
      <ul id="menu-main" className="space-y-2 mt-4 pl-2.5">
        <li>
          <button
            className="w-full flex items-center p-2 hover:bg-gray-700 rounded-s-[50px]"
          >
           <LayoutDashboard style={{ marginRight: '10px' }}></LayoutDashboard>Dashboard
          </button>
        </li>
        <li>
          <button
            className="w-full flex items-center p-2 hover:bg-gray-700 rounded-s-[50px]"
          >
            <Images style={{ marginRight: '10px' }}></Images>Thư viện ảnh
          </button>
        </li>
        {/* Dropdown 1: Quản lý người dùng */}
        <li>
          <button
            className="w-full flex items-center p-2 hover:bg-gray-700 rounded-s-[50px]"
            onClick={() => dispatch(toggleDropdown("users"))}
          >
           <Users style={{ marginRight: '10px' }}></Users>Quản lý người dùng <ChevronDown className="ml-auto mr-2" size={16} />
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
            className="w-full flex items-center p-2 hover:bg-gray-700 rounded-s-[50px]"
            onClick={() => dispatch(toggleDropdown("products"))}
          >
            <PackageSearch style={{ marginRight: '10px' }}></PackageSearch>Quản lý sản phẩm <ChevronDown className="ml-auto mr-2" size={16} />
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
            className="w-full flex items-center p-2 hover:bg-gray-700 rounded-s-[50px]"
            onClick={() => dispatch(toggleDropdown("posts"))}
          >
            <Newspaper style={{ marginRight: '10px' }}></Newspaper>Quản lý bài viết <ChevronDown className="ml-auto mr-2" size={16} />
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
            className="w-full flex items-center p-2 hover:bg-gray-700 rounded-s-[50px]"
            onClick={() => dispatch(toggleDropdown("page"))}
          >
            <Layers style={{ marginRight: '10px' }}></Layers>Quản lý trang <ChevronDown className="ml-auto mr-2" size={16} />
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
