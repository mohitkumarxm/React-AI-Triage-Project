import { configureStore } from "@reduxjs/toolkit";

import inboxReducer from "./slices/inbox-slice";
import filterReducer from "./slices/filter-slice";
import uiReducer from "./slices/ui-slice";

export const store = configureStore({
  reducer: {
    inbox: inboxReducer,
    filters: filterReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
