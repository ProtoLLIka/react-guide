import React from 'react'
import { useSelector } from 'react-redux'
import { selectCurrencies } from '../../store/selectors'

export const Button = () => {
  const currencies = useSelector(selectCurrencies);
  return (
    <div>Rubs = {currencies.rub}</div>
  )
}
