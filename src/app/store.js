import { configureStore } from '@reduxjs/toolkit';

// Slice'ları burada import edin
// import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    // Dilimlerinizi burada ekleyin
    // counter: counterReducer,
  },
});

export default store;