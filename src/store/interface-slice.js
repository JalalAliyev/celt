import { createSlice } from '@reduxjs/toolkit';

const interfaceSlice = createSlice({
  name: 'interface',
  initialState: {
    voice: false,
    isBackdrop: false,
    title: '',
    isSidebarVisible: false,
  },
  reducers: {
    changeBackdrop: (state, { payload }) => {
      state.isBackdrop = !state.isBackdrop;
      state.title = payload;
    },
    saveVoice: (state, { payload }) => {
      state.voice = payload;
    },
    changeSidebarVisibility: (state) => {
      state.isSidebarVisible = !state.isSidebarVisible;
    },
    changeSidebarInVisible: (state) => {
      state.isSidebarVisible = false
    }
  },
});

export const { changeBackdrop, saveVoice, changeSidebarVisibility,changeSidebarInVisible } =
  interfaceSlice.actions;

export default interfaceSlice.reducer;
