import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { getAvailableCurrencies } from '../api/available-currencies';

export const action = createAction<number>('action');
export const asyncAction = createAsyncThunk('asyncAction', getAvailableCurrencies);