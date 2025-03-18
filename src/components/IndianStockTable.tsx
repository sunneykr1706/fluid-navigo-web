
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from './ui/table';

const IndianStockTable = () => {
  const { stocks, loading, error } = useSelector((state: RootState) => state.stocks);
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'ascending' | 'descending' } | null>(null);

  // Filtering for Indian stocks only (using BSE/NSE prefix in symbol)
  const indianStocks = stocks.filter(stock => 
    stock.symbol.startsWith('BSE:') || stock.symbol.startsWith('NSE:')
  );

  // Sorting logic
  const sortedStocks = React.useMemo(() => {
    let sortableStocks = [...indianStocks];
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
  }, [indianStocks, sortConfig]);

  const requestSort = (key: string) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  if (loading) return <div className="flex justify-center p-8">Loading Indian stock data...</div>;
  if (error) return <div className="text-red-500 p-4">Error: {error}</div>;
  if (sortedStocks.length === 0) return <div className="text-muted-foreground p-4">No Indian stock data available</div>;

  return (
    <div className="overflow-auto rounded-lg shadow-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead 
              className="cursor-pointer hover:bg-muted/50"
              onClick={() => requestSort('symbol')}
            >
              Symbol
              {sortConfig?.key === 'symbol' && (
                sortConfig.direction === 'ascending' ? 
                <ArrowUpIcon className="inline h-4 w-4 ml-1" /> : 
                <ArrowDownIcon className="inline h-4 w-4 ml-1" />
              )}
            </TableHead>
            <TableHead 
              className="text-right cursor-pointer hover:bg-muted/50"
              onClick={() => requestSort('price')}
            >
              Price
              {sortConfig?.key === 'price' && (
                sortConfig.direction === 'ascending' ? 
                <ArrowUpIcon className="inline h-4 w-4 ml-1" /> : 
                <ArrowDownIcon className="inline h-4 w-4 ml-1" />
              )}
            </TableHead>
            <TableHead 
              className="text-right cursor-pointer hover:bg-muted/50"
              onClick={() => requestSort('change')}
            >
              Change
              {sortConfig?.key === 'change' && (
                sortConfig.direction === 'ascending' ? 
                <ArrowUpIcon className="inline h-4 w-4 ml-1" /> : 
                <ArrowDownIcon className="inline h-4 w-4 ml-1" />
              )}
            </TableHead>
            <TableHead 
              className="text-right cursor-pointer hover:bg-muted/50"
              onClick={() => requestSort('changePercent')}
            >
              % Change
              {sortConfig?.key === 'changePercent' && (
                sortConfig.direction === 'ascending' ? 
                <ArrowUpIcon className="inline h-4 w-4 ml-1" /> : 
                <ArrowDownIcon className="inline h-4 w-4 ml-1" />
              )}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedStocks.map((stock) => (
            <TableRow 
              key={stock.symbol} 
              className="hover:bg-muted/50 transition-colors"
            >
              <TableCell className="font-medium">{stock.symbol}</TableCell>
              <TableCell className="text-right">₹{stock.price.toFixed(2)}</TableCell>
              <TableCell className={`text-right ${stock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)}
              </TableCell>
              <TableCell className={`text-right ${stock.changePercent >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default IndianStockTable;
