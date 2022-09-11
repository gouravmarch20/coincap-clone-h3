import React from 'react'

import './CurrencyInfoCard.css'
import {
  getCurrencyInDollar,
  getCurrencySystem,
  getPercentChangeIn24Hr
} from '../../utils'
export const CurrencyInfoCard = ({
  changePercent24Hr,
  id,
  marketCapUsd,
  name,
  priceUsd,
  rank,
  supply,
  symbol,
  volumeUsd24Hr,
  vwap24Hr
}) => {
  const formatPriceUsd = getCurrencyInDollar(priceUsd)
  const formatVwap24Hr = getCurrencyInDollar(vwap24Hr)
  const formatMarketCapUsd = getCurrencySystem(marketCapUsd)
  const formatSupply = getCurrencySystem(supply)
  const formatVolume = getCurrencySystem(volumeUsd24Hr)
  const formatChangePercent24Hr = getPercentChangeIn24Hr(changePercent24Hr)
  return (
    <tr className='currency-info-card'>
      <td>{rank}</td>

      <td className='currency-img-name'>
        <img
          className='currency-img'
          src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
          alt={symbol}
        />
        <div className='currency-name-symbol'>
          <span>{name}</span>
          <span className='currency-symbol'>{symbol}</span>
        </div>
      </td>

      <td>{formatPriceUsd}</td>
      <td>{formatMarketCapUsd}</td>
      <td>{formatVwap24Hr}</td>
      <td>{formatSupply}</td>
      <td>{formatVolume}</td>
      <td
        className={`${
          formatChangePercent24Hr.charAt(0) === '-' ? 'text-red' : 'text-green'
        }`}
      >
        {formatChangePercent24Hr}
      </td>
    </tr>
  )
}
