import { PayloadAction, createReducer } from '@reduxjs/toolkit';

import { action, asyncAction } from './actions';

import { TReducer } from './types';
import { Currencies } from '../types/common';

const initialState: TReducer = {
  currencies: {rub: 0, usd: 0}
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(action.type, (state, action) => { })
  builder.addCase(asyncAction.fulfilled.type, (state, action: PayloadAction<Currencies>) => {
    state.currencies = action.payload
  })
});
