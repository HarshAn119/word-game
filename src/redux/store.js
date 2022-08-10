import { configureStore } from '@reduxjs/toolkit';
import wordReducer from './reducers/wordReducer';

export const store = configureStore({
  reducer: {
    wordReducer,
  },
});
