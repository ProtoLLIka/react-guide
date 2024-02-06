import { TReducer } from "./types";
import { createDraftSafeSelector } from "@reduxjs/toolkit";

const selectSelf = (state: TReducer) => state
export const selectCurrencies = createDraftSafeSelector(
  selectSelf,
  (state) => state.currencies
)
