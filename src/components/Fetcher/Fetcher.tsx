import React, { PropsWithChildren, useEffect } from 'react'
import { useAppDispatch } from '@store/index';
import { asyncAction } from '@store/actions';

export const Fetcher: React.FunctionComponent<PropsWithChildren> = ({children}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(asyncAction());
  }, []);

  return (
    <>{children}</>
  )
}
