import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./features/sidebarSlice"; // Import reducer

// Tạo store và khai báo reducer
export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer, // Quản lý trạng thái sidebar
  },
});

// Xuất kiểu dữ liệu của store để dùng trong ứng dụng
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
