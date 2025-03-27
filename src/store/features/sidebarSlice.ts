import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: true, // Mặc định sidebar mở
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen; // Đảo trạng thái mở/tắt
    },
  },
});

// Xuất actions và reducer
export const { toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
