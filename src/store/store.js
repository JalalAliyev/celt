import { configureStore } from '@reduxjs/toolkit';
import interfaceReducer from './interface-slice';

const store = configureStore({
  reducer: {
    interface: interfaceReducer,
  },
});

export default store;
