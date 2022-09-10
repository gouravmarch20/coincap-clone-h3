import React, { useEffect, useState } from 'react'
import { CurrencyInfo, CurrencyInfoHeader } from '../components'

export const HomePage = () => {
  return (
    <>
      <CurrencyInfoHeader />
      <CurrencyInfo />
    </>
  )
}
