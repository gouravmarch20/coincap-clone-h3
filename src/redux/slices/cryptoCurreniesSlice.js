import { createSlice } from '@reduxjs/toolkit'
import { getCryptoCurrencies } from '../asyncThunks'

const initialState = {
  cryptoCurrencies: [],
  status: 'idle'
}
const cryptoCurrenciesSlice = createSlice({
  name: 'cryptoCurrencies',
  initialState,
  reducers: {},
  extraReducers: {
    [getCryptoCurrencies.pending]: state => {
      state.status = 'loading'
    },
    [getCryptoCurrencies.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.cryptoCurrencies = action.payload.data
    },
    [getCryptoCurrencies.rejected]: state => {
      state.status = 'failed'
    }
  }
})

export const { reducer: cryptoCurrenciesReducer } = cryptoCurrenciesSlice
