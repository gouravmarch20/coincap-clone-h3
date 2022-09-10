import { configureStore } from '@reduxjs/toolkit'
import { cryptoCurrenciesReducer } from '../slices'

const store = configureStore({
  reducer: { cryptoCurrencies : cryptoCurrenciesReducer }
})

export { store }
