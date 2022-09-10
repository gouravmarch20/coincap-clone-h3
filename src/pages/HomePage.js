import React, { useEffect, useState } from 'react'
import { CurrencyInfo, CurrencyInfoHeader } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { getCryptoCurrencies } from '../redux/asyncThunks'
export const HomePage = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const { currencies } = useSelector(state => state.cryptoCurrencies)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCryptoCurrencies(pageNumber))
  }, [pageNumber])

  return (
    <>
      <CurrencyInfoHeader />
      <CurrencyInfo />
    </>
  )
}
