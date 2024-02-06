import { configureStore } from '@reduxjs/toolkit';

import { useDispatch } from 'react-redux';
import { Any } from '@type/common';

import { AppDispatch, TReducer } from './types';
import { reducer } from './reducer';

export const store = configureStore<TReducer, Any>({
  reducer,
});

export const useAppDispatch: () => AppDispatch = useDispatch;

export { AppDispatch, TReducer } from './types';