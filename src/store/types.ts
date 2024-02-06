import { store } from '.';
import { Currencies } from '../types/common';

export type TReducer = {
  currencies: Currencies
};

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;