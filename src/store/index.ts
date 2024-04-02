import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/es/storage";

import combineReducers from "./reducers";

const persistConfig = {
  key: "security",
  storage,
};

const persistedReducer = persistReducer(persistConfig, combineReducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

let persistor = persistStore(store);

export { persistor, store };
