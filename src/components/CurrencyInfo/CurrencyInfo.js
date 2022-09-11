import React, { useEffect, useState } from 'react'
import { CurrencyInfoCard } from '../index'
import './CurrencyInfo.css'

import { useDispatch, useSelector } from 'react-redux'
import { getCryptoCurrencies } from '../../redux/asyncThunks'

export const CurrencyInfo = () => {
  const dispatch = useDispatch()
  const { cryptoCurrencies, status } = useSelector(
    state => state.cryptoCurrencies
  )
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    dispatch(getCryptoCurrencies(pageNumber))
  }, [pageNumber, dispatch])

  return (
    <>
    
      <section className='currencies-info-container'>
        <table className='currencies-info-table'>
          <thead className='currency-head'>
            <tr>
              <td className='currency-info currency-row-center'>Rank</td>
              <td className='currency-info currency-row-center'>Name</td>
              <td className='currency-info currency-row-center'>Price</td>
              <td className='currency-info currency-row-center'>Market Cap</td>
              <td className='currency-info currency-row-center'>VWAP (24Hr)</td>
              <td className='currency-info currency-row-center'>Supply </td>
              <td className='currency-info currency-row-center'>
                Volume (24Hr)
              </td>
              <td className='currency-info currency-row-center'>
                Change (24Hr)
              </td>
            </tr>
          </thead>
          <tbody>
            {cryptoCurrencies && cryptoCurrencies.length !== 0 ? (
              cryptoCurrencies.map(currency => (
                <CurrencyInfoCard key={currency.id} {...currency} />
              ))
            ) : (
              <>
                {status !== 'loading' ? (
                  <tr>
                    <td>no data found</td>
                  </tr>
                ) : null}
              </>
            )}
          </tbody>
        </table>

        <button
          className='btn btn-primary mt-1'
          onClick={() => setPageNumber(prev => prev + 1)}
        >
          {status === 'loading' ? 'Loading  data ' : 'View more'}
        </button>
      </section>
    </>
  )
}
