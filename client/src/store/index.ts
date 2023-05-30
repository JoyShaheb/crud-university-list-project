import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { UniversityAPI, useGetAllUniversitiesQuery } from "./API/UniversityAPI";
import { resetSystem, sysmtemSlice, themeSwitch } from "./slices/System";

export const store = configureStore({
  reducer: {
    [UniversityAPI.reducerPath]: UniversityAPI.reducer,
    system: sysmtemSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(UniversityAPI.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {
  // system actions
  resetSystem,
  themeSwitch,

  // University API,
  useGetAllUniversitiesQuery,
};
