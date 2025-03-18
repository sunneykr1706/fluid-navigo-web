
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateStock, setStocks, setError, StockData } from '../store/slices/stockSlice';

// Mock initial stock data
const initialMockStocks: StockData[] = [
  // US Stocks
  { symbol: 'AAPL', price: 178.72, change: 0.0, changePercent: 0.0, volume: 23456789, lastUpdated: new Date().toISOString() },
  { symbol: 'MSFT', price: 420.45, change: 0.0, changePercent: 0.0, volume: 15678901, lastUpdated: new Date().toISOString() },
  { symbol: 'GOOGL', price: 161.28, change: 0.0, changePercent: 0.0, volume: 8901234, lastUpdated: new Date().toISOString() },
  { symbol: 'AMZN', price: 178.75, change: 0.0, changePercent: 0.0, volume: 12345678, lastUpdated: new Date().toISOString() },
  { symbol: 'META', price: 496.95, change: 0.0, changePercent: 0.0, volume: 7890123, lastUpdated: new Date().toISOString() },
  { symbol: 'TSLA', price: 248.39, change: 0.0, changePercent: 0.0, volume: 34567890, lastUpdated: new Date().toISOString() },
  { symbol: 'NVDA', price: 877.42, change: 0.0, changePercent: 0.0, volume: 45678901, lastUpdated: new Date().toISOString() },
  { symbol: 'BRK.B', price: 417.57, change: 0.0, changePercent: 0.0, volume: 2345678, lastUpdated: new Date().toISOString() },
  
  // Indian Stocks
  { symbol: 'NSE:RELIANCE', price: 2457.30, change: 0.0, changePercent: 0.0, volume: 5467890, lastUpdated: new Date().toISOString() },
  { symbol: 'NSE:TCS', price: 3876.25, change: 0.0, changePercent: 0.0, volume: 1234567, lastUpdated: new Date().toISOString() },
  { symbol: 'NSE:INFY', price: 1568.45, change: 0.0, changePercent: 0.0, volume: 2345678, lastUpdated: new Date().toISOString() },
  { symbol: 'NSE:HDFCBANK', price: 1725.80, change: 0.0, changePercent: 0.0, volume: 3456789, lastUpdated: new Date().toISOString() },
  { symbol: 'BSE:TATASTEEL', price: 147.65, change: 0.0, changePercent: 0.0, volume: 7654321, lastUpdated: new Date().toISOString() },
  { symbol: 'BSE:WIPRO', price: 456.90, change: 0.0, changePercent: 0.0, volume: 1987654, lastUpdated: new Date().toISOString() }
];

export const useStockWebSocket = () => {
  const dispatch = useDispatch();
  const intervalRef = useRef<number | null>(null);
  const [mockStocks, setMockStocks] = useState<StockData[]>(initialMockStocks);

  useEffect(() => {
    // Initialize with mock data
    dispatch(setStocks(mockStocks));

    // Simulate WebSocket connection with an interval
    intervalRef.current = window.setInterval(() => {
      // Update a random stock with random price changes
      const randomIndex = Math.floor(Math.random() * mockStocks.length);
      const stock = mockStocks[randomIndex];
      
      // Generate random price change (-2% to +2%)
      const changePercent = (Math.random() * 4 - 2) / 100;
      const change = stock.price * changePercent;
      const newPrice = stock.price + change;
      
      const updatedStock: StockData = {
        ...stock,
        price: parseFloat(newPrice.toFixed(2)),
        change: parseFloat(change.toFixed(2)),
        changePercent: parseFloat((changePercent * 100).toFixed(2)),
        lastUpdated: new Date().toISOString(),
      };

      // Update in our mock data array to maintain consistency
      const updatedMockStocks = [...mockStocks];
      updatedMockStocks[randomIndex] = updatedStock;
      setMockStocks(updatedMockStocks);
      
      // Dispatch to Redux
      dispatch(updateStock(updatedStock));
    }, 1000); // Update every second

    // Cleanup function
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [dispatch, mockStocks]);
};
