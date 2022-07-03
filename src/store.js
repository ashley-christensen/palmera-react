import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { userReducer } from './utils/user/userSlice';

export const store = configureStore({
 reducer: {
  user: userReducer,
 },
 middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
