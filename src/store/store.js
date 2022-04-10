import { configureStore } from '@reduxjs/toolkit'
import dataStore from './reducer';

export const store = configureStore({
  reducer: {
    dataStore: dataStore,
  },
});
