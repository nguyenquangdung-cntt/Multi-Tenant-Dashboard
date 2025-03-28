import { createSlice } from "@reduxjs/toolkit";
import { LayoutDashboard, Users, PackageSearch, Images, Layers, Newspaper } from "lucide-react";

interface MenuItem {
  name: string;
  path: string;
  icon: React.ComponentType<{ size?: number }>;
  children?: MenuItem[];
}

interface PathState {
  menuItems: MenuItem[];
}

const initialState: PathState = {
  menuItems: [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "Thư viện ảnh", path: "/dashboard/photo", icon: Images },
    { 
      name: "Quản lý người dùng", 
      path: "/dashboard/users", 
      icon: Users,
      children: [
        { name: "Thêm người dùng", path: "/dashboard/users/add", icon: Users },
        { name: "Danh sách người dùng", path: "/dashboard/users/list", icon: Users },  
      ]
    },
    { 
      name: "Quản lý sản phẩm", 
      path: "/dashboard/products", 
      icon: PackageSearch,
      children: [
        { name: "Thêm sản phẩm", path: "/dashboard/products/add", icon: PackageSearch },    
        { name: "Danh sách sản phẩm", path: "/dashboard/products/list", icon: PackageSearch },
      ] 
    }
    ,
    { 
      name: "Quản lý bài viết", 
      path: "/dashboard/posts", 
      icon: Newspaper, 
      children: [
        { name: "Viết bài mới", path: "/dashboard/posts/add", icon: Newspaper },
        { name: "Danh sách bài viết", path: "/dashboard/posts/list", icon: Newspaper },]
    },
    { 
      name: "Quản lý trang", 
      path: "/dashboard/page", 
      icon: Layers, 
      children: [
        { name: "Thêm trang", path: "/dashboard/page/add", icon: Layers }, 
        { name: "Danh sách trang", path: "/dashboard/page/list", icon: Layers },
      ]
    },
  ],
};

const pathSlice = createSlice({
  name: "path",
  initialState,
  reducers: {},
});

export default pathSlice.reducer;
