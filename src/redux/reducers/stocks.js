import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {};

const STOCK_API = 'https://financialmodelingprep.com/api/v3/financial-statement-symbol-lists?apikey=f86b4dd4ebf8f47597116011e195ecf8';

const FETCH_STOCK_DATA = 'FETCH_STOCK_DATA';

export const getStockData = createAsyncThunk(FETCH_STOCK_DATA, async () => {
  const response = await fetch(STOCK_API);
  const payload = await response.json();
  return payload;
});

const stockSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default stockSlice;
