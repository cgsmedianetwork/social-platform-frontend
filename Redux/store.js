import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { apiSlice } from "./BaseApi/BaseApi";
import authHelperReducer from "./Features/Auth/AuthHelperSlice";
import authReducer from "./Features/Auth/AuthSlice";

const persistConfig = {
  key: "auth",
  storage,
  // whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  // const isServer = typeof window === 'undefined'
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: persistedReducer,
    authHelper: authHelperReducer,
  },
  devTools: process.env.NEXT_PUBLIC_ENVIRONMENT === "production",
  middleware: (gDM) =>
    gDM({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
