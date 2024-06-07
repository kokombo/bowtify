import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type StateType = ReturnType<typeof store.getState>;

export type DispatchType = typeof store.dispatch;
