import { combineReducers, configureStore } from "@reduxjs/toolkit";

import bundleReducer from "./slices/bundleSlice";

const rootReducer = combineReducers({
  bundle: bundleReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
