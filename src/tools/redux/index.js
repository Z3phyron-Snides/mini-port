import { configureStore } from "@reduxjs/toolkit";
import { onlyHasState } from "redux-devtools-filter-actions";
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  enhancers: [
    (devTools) =>
      onlyHasState(
        (state) => state.showInDevTools, // only show states where this is true
        { name: "Filter DevTools" }
      )(devTools),
  ],
});

export default store;
