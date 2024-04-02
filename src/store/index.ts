import { configureStore } from "@reduxjs/toolkit";
import { PersistConfig, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/es/storage";

import { IReduxState } from "../interfaces/store";
import { env } from "../utils/environments";
import combineReducers from "./reducers";

const persistConfig: PersistConfig<IReduxState> = {
  key: env.REDUX_PERSIST_KEY,
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
