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
      {/* TODO: */}
      <td>{/* <img ></img> */}</td>

      <td>{priceUsd}</td>
      <td>{marketCapUsd}</td>
      <td>{vwap24Hr}</td>
      <td>{supply}</td>
      <td>{volumeUsd24Hr}</td>
      <td>{changePercent24Hr}</td>
    </tr>
  )
}
