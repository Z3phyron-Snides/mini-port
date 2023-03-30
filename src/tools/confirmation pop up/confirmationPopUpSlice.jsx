import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  message: "",
};

const confirmationPopupSlice = createSlice({
  name: "confirmationPopup",
  initialState,
  reducers: {
    showPopup: (state, action) => {
      state.isOpen = true;
      state.message = action.payload;
    },
    hidePopup: (state) => {
      state.isOpen = false;
      state.message = "";
    },
  },
});

export const { showPopup, hidePopup } = confirmationPopupSlice.actions;

export default confirmationPopupSlice.reducer;
