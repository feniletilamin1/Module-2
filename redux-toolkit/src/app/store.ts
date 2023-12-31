import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import filmsReducer from "./slices/filmSlice";

export const store = configureStore({
    reducer: {
        films: filmsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

   
