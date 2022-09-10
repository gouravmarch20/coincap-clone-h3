import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const getCryptoCurrencies = createAsyncThunk(
  'getCryptoCurrencies',
  async pageNumber => {
    try {
      const response = await axios.get(
        `https://api.coincap.io/v2/assets/?limit=${pageNumber * 50}`
      )
      const data = { data: response.data.data, status: response.status }
      return data
    } catch (error) {
      alert('issue in coincap server ')
      console.error(error.message)
    }
  }
)
