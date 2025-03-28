import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MenuState {
  openDropdown: string | null;
}

const initialState: MenuState = {
  openDropdown: null,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleDropdown: (state, action: PayloadAction<string>) => {
      state.openDropdown = state.openDropdown === action.payload ? null : action.payload;
    },
  },
});

export const { toggleDropdown } = menuSlice.actions;
export default menuSlice.reducer;
