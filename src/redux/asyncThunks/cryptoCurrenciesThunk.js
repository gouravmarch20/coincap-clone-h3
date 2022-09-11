import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { getCryptoCurrencyService } from '../../services'
export const getCryptoCurrencies = createAsyncThunk(
  'getCryptoCurrencies',
  async pageNumber => {
    try {
      const response = await getCryptoCurrencyService(pageNumber)
      const data = { data: response.data.data, status: response.status }
      return data
    } catch (error) {
      alert('issue in coincap server ')
      console.error(error.message)
    }
  }
)
