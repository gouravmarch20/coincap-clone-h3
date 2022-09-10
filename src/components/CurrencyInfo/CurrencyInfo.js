import React, { useEffect, useState } from 'react'
import { CurrencyInfoCard } from '../index'

import { useDispatch, useSelector } from 'react-redux'
import { getCryptoCurrencies } from '../../redux/asyncThunks'

export const CurrencyInfo = () => {
  const dispatch = useDispatch()
  const { cryptoCurrencies } = useSelector(state => state.cryptoCurrencies)
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    dispatch(getCryptoCurrencies(pageNumber))
  }, [pageNumber])

  return (
    <>
      <section className='currencies-info-container'>
        <table className='currencies-info-table'>
          <thead>
            <tr>
              <td>Rank</td>
              <td>Name</td>
              <td>Price</td>
              <td>Market Cap</td>
              <td>VWAP (24Hr)</td>
              <td>Supply </td>
              <td>Volume (24Hr)</td>
              <td>Change (24Hr)</td>
            </tr>
          </thead>
          <tbody>
            {cryptoCurrencies.map(currency => (
              <CurrencyInfoCard key={currency.id} {...currency} />
            ))}
          </tbody>
        </table>

        <button onClick={() => setPageNumber(prev => prev + 1)}>
          View More
        </button>
      </section>
    </>
  )
}
