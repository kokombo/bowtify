import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/user";

export const store = configureStore({
  reducer: {
    user: userSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type StateType = ReturnType<typeof store.getState>;

export type DispatchType = typeof store.dispatch;
