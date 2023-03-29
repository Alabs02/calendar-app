import {
  configureStore,
  Action,
  ThunkDispatch,
  CombinedState,
  AnyAction,
  EmptyObject,
  Dispatch,
} from "@reduxjs/toolkit";
import logger from "redux-logger";
import { ThunkAction } from "redux-thunk";

// STATE PERSIST
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  REGISTER,
  PURGE,
  PAUSE,
  PERSIST,
} from "redux-persist";

import storage from "./storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

// REDUCERS
import { default as reducers } from "./rootReducer";

// COMBINED ROOT STATE
import { CombinedRootState } from "./slices";

const devMode = process.env.NODE_ENV === "development";

const persistConfig = {
  key: "jobsity_calendar_app",
  storage,
  stateReconciler: autoMergeLevel2,
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, reducers as any),
  devTools: devMode,
  middleware: (getDefaultMiddleware) =>
    devMode
      ? getDefaultMiddleware({
          thunk: true,
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, REGISTER, PURGE, PAUSE, PERSIST],
          },
        }).concat(logger)
      : getDefaultMiddleware({
          thunk: true,
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, REGISTER, PURGE, PAUSE, PERSIST],
          },
        }),
});

export const persistor = persistStore(store);

export type RootState = EmptyObject & CombinedRootState;
export type AppDispatch = ThunkDispatch<
  CombinedState<CombinedRootState>,
  undefined,
  AnyAction
> &
  Dispatch<AnyAction>;

export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
