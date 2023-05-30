import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { UniversityAPI, useGetAllUniversitiesQuery } from "./API/UniversityAPI";

export const store = configureStore({
  reducer: {
    [UniversityAPI.reducerPath]: UniversityAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(UniversityAPI.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {
  // University API,
  useGetAllUniversitiesQuery,
};
