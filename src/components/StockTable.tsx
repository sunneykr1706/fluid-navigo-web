
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';

const StockTable = () => {
  const { stocks, loading, error } = useSelector((state: RootState) => state.stocks);
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'ascending' | 'descending' } | null>(null);

  // Sorting logic
  const sortedStocks = React.useMemo(() => {
    let sortableStocks = [...stocks];
    if (sortConfig !== null) {
      sortableStocks.sort((a: any, b: any) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableStocks;
  }, [stocks, sortConfig]);

  const requestSort = (key: string) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getClassNamesFor = (name: string) => {
    if (!sortConfig) {
      return '';
    }
    return sortConfig.key === name ? sortConfig.direction : '';
  };

  if (loading) return <div className="flex justify-center p-8">Loading stock data...</div>;
  if (error) return <div className="text-red-500 p-4">Error: {error}</div>;

  return (
    <div className="overflow-auto rounded-lg shadow-md">
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th 
              className="p-3 text-sm font-semibold tracking-wide text-left cursor-pointer hover:bg-gray-100"
              onClick={() => requestSort('symbol')}
            >
              Symbol
              {sortConfig?.key === 'symbol' && (
                sortConfig.direction === 'ascending' ? 
                <ArrowUpIcon className="inline h-4 w-4 ml-1" /> : 
                <ArrowDownIcon className="inline h-4 w-4 ml-1" />
              )}
            </th>
            <th 
              className="p-3 text-sm font-semibold tracking-wide text-right cursor-pointer hover:bg-gray-100"
              onClick={() => requestSort('price')}
            >
              Price
              {sortConfig?.key === 'price' && (
                sortConfig.direction === 'ascending' ? 
                <ArrowUpIcon className="inline h-4 w-4 ml-1" /> : 
                <ArrowDownIcon className="inline h-4 w-4 ml-1" />
              )}
            </th>
            <th 
              className="p-3 text-sm font-semibold tracking-wide text-right cursor-pointer hover:bg-gray-100"
              onClick={() => requestSort('change')}
            >
              Change
              {sortConfig?.key === 'change' && (
                sortConfig.direction === 'ascending' ? 
                <ArrowUpIcon className="inline h-4 w-4 ml-1" /> : 
                <ArrowDownIcon className="inline h-4 w-4 ml-1" />
              )}
            </th>
            <th 
              className="p-3 text-sm font-semibold tracking-wide text-right cursor-pointer hover:bg-gray-100"
              onClick={() => requestSort('changePercent')}
            >
              % Change
              {sortConfig?.key === 'changePercent' && (
                sortConfig.direction === 'ascending' ? 
                <ArrowUpIcon className="inline h-4 w-4 ml-1" /> : 
                <ArrowDownIcon className="inline h-4 w-4 ml-1" />
              )}
            </th>
            <th 
              className="p-3 text-sm font-semibold tracking-wide text-right cursor-pointer hover:bg-gray-100"
              onClick={() => requestSort('volume')}
            >
              Volume
              {sortConfig?.key === 'volume' && (
                sortConfig.direction === 'ascending' ? 
                <ArrowUpIcon className="inline h-4 w-4 ml-1" /> : 
                <ArrowDownIcon className="inline h-4 w-4 ml-1" />
              )}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {sortedStocks.map((stock) => (
            <tr 
              key={stock.symbol} 
              className="bg-white hover:bg-gray-50 transition-colors"
            >
              <td className="p-3 text-sm font-medium text-gray-900">{stock.symbol}</td>
              <td className="p-3 text-sm text-gray-900 text-right">${stock.price.toFixed(2)}</td>
              <td className={`p-3 text-sm text-right ${stock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)}
              </td>
              <td className={`p-3 text-sm text-right ${stock.changePercent >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
              </td>
              <td className="p-3 text-sm text-gray-900 text-right">
                {stock.volume.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;
