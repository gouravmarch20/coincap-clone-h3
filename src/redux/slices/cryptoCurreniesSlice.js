import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cryptoCurrencies: [],
  status: 'idle'
}
const cryptoCurrenciesSlice = createSlice({
  name: 'cryptoCurrencies',
  initialState,
  reducers: {},
  extraReducers: {}
})

export const { reducer: cryptoCurrenciesReducer } = cryptoCurrenciesSlice
