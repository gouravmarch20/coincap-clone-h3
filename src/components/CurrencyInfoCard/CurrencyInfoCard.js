import React from 'react'

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
  return (
    <tr className='currency-info-card'>
      <td>{rank}</td>
    
      <td>
        <img
          src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`}
          alt={symbol}
        />
      </td>

      <td>{priceUsd}</td>
      <td>{marketCapUsd}</td>
      <td>{vwap24Hr}</td>
      <td>{supply}</td>
      <td>{volumeUsd24Hr}</td>
      <td>{changePercent24Hr}</td>
    </tr>
  )
}
