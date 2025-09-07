import React, { useState, useCallback } from 'react';
import { ReceiptData } from './types';
import ReceiptForm from './components/ReceiptForm';
import ReceiptPreview from './components/ReceiptPreview';
import Header from './components/Header';

const generateInitialData = (): ReceiptData => {
  const now = new Date();
  const date = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}`;
  const time = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const receiptNo = String(Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000);

  return {
    template: 'Classic Printer',
    brand: 'Indian Oil',
    stationName: 'Indian Oil',
    stationAddress: '123, Main Road\nNew Delhi, 110001',
    receiptNo: `${receiptNo}-ORGNL`,
    date: date,
    time: time,
    product: 'Diesel',
    rate: 94.72,
    volume: 10.56,
    amount: 1000.00,
    vehicleNo: 'Not Entered',
    paymentMode: 'Cash',
  };
};

const App: React.FC = () => {
  
  const [receiptData, setReceiptData] = useState<ReceiptData>(generateInitialData);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setReceiptData(prevData => {
      if (name === 'rate' || name === 'volume' || name === 'amount') {
        const numValue = parseFloat(value) || 0;

        if (name === 'rate' || name === 'volume') {
            const rate = name === 'rate' ? numValue : prevData.rate;
            const volume = name === 'volume' ? numValue : prevData.volume;
            const amount = parseFloat((rate * volume).toFixed(2));
            return { ...prevData, [name]: numValue, amount };
        }
        
        // name must be 'amount' here
        if (prevData.rate > 0) {
            const volume = parseFloat((numValue / prevData.rate).toFixed(2));
            return { ...prevData, amount: numValue, volume };
        }
        return { ...prevData, amount: numValue };
      }

      if (name === 'brand') {
        const brandStationNameMap: { [key: string]: string } = {
          'Bharat Petroleum': 'Bharat Petroleum',
          'Indian Oil': 'Indian Oil',
          'Hindustan Petroleum': 'Hindustan Petroleum',
          'Reliance': 'Reliance Petroleum',
          'Shell': 'Shell',
          'Essar': 'Essar',
          'Nayara': 'Nayara Energy',
          'Jio-BP': 'Jio-BP',
        };
        return { ...prevData, brand: value, stationName: brandStationNameMap[value] || value };
      }

      return { ...prevData, [name]: value };
    });
  }, []);
  
  const handleReset = useCallback(() => {
    setReceiptData(generateInitialData());
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Header />
      <main className="container mx-auto p-4 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <ReceiptForm 
              data={receiptData} 
              onInputChange={handleInputChange} 
              onReset={handleReset}
            />
          </div>
          <div className="lg:col-span-3">
            <ReceiptPreview data={receiptData} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;