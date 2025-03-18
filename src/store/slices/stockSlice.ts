
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface StockData {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  lastUpdated: string;
}

interface StockState {
  stocks: StockData[];
  loading: boolean;
  error: string | null;
}

const initialState: StockState = {
  stocks: [],
  loading: false,
  error: null,
};

const stockSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {
    setStocks: (state, action: PayloadAction<StockData[]>) => {
      state.stocks = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateStock: (state, action: PayloadAction<StockData>) => {
      const index = state.stocks.findIndex(stock => stock.symbol === action.payload.symbol);
      if (index !== -1) {
        state.stocks[index] = action.payload;
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setStocks, updateStock, setLoading, setError } = stockSlice.actions;
export default stockSlice.reducer;
