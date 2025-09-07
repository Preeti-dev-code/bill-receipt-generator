import React from 'react';
import { ReceiptData } from '../types';
import InputGroup from './InputGroup';

interface ReceiptFormProps {
  data: ReceiptData;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  onReset: () => void;
}

const FormSection: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
    <div className="space-y-4">
        <h3 className="text-lg font-semibold px-2 text-slate-700 dark:text-slate-300 border-b border-slate-300 dark:border-slate-700 pb-2">{title}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-2">
            {children}
        </div>
    </div>
);

const ReceiptForm: React.FC<ReceiptFormProps> = ({ data, onInputChange, onReset }) => {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg space-y-6">
        <h2 className="text-xl font-bold text-slate-800 dark:text-white">Receipt Details</h2>
        <form className="space-y-6">
            <FormSection title="Design">
                <div className="flex flex-col sm:col-span-2">
                    <label htmlFor="template" className="mb-1 text-sm font-medium text-slate-600 dark:text-slate-400">Receipt Template</label>
                    <select
                        id="template"
                        name="template"
                        value={data.template}
                        onChange={onInputChange}
                        className="w-full p-2 border border-slate-300 dark:border-slate-600 rounded-md bg-slate-50 dark:bg-slate-700 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
                    >
                        <option>Classic Printer</option>
                        <option>Modern Digital</option>
                    </select>
                </div>
            </FormSection>

            <FormSection title="Station Details">
                 <div className="flex flex-col sm:col-span-2">
                    <label htmlFor="brand" className="mb-1 text-sm font-medium text-slate-600 dark:text-slate-400">Petrol Pump Brand</label>
                    <select
                        id="brand"
                        name="brand"
                        value={data.brand}
                        onChange={onInputChange}
                        className="w-full p-2 border border-slate-300 dark:border-slate-600 rounded-md bg-slate-50 dark:bg-slate-700 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
                    >
                        <option>Indian Oil</option>
                        <option>Hindustan Petroleum</option>
                        <option>Bharat Petroleum</option>
                        <option>Shell</option>
                        <option>Reliance</option>
                        <option>Essar</option>
                        <option>Nayara</option>
                        <option>Jio-BP</option>
                    </select>
                </div>
                <InputGroup label="Station Name" name="stationName" value={data.stationName} onChange={onInputChange} containerClassName="sm:col-span-2" />
                <div className="flex flex-col sm:col-span-2">
                    <label htmlFor="stationAddress" className="mb-1 text-sm font-medium text-slate-600 dark:text-slate-400">Station Address</label>
                    <textarea
                        id="stationAddress"
                        name="stationAddress"
                        value={data.stationAddress}
                        onChange={onInputChange}
                        rows={3}
                        className="w-full p-2 border border-slate-300 dark:border-slate-600 rounded-md bg-slate-50 dark:bg-slate-700 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
                    />
                </div>
            </FormSection>
            
            <FormSection title="Transaction Details">
                <InputGroup label="Date" name="date" value={data.date} onChange={onInputChange} />
                <InputGroup label="Time" name="time" value={data.time} onChange={onInputChange} />
                <InputGroup label="Vehicle No" name="vehicleNo" value={data.vehicleNo} onChange={onInputChange} />
                <div className="flex flex-col">
                    <label htmlFor="paymentMode" className="mb-1 text-sm font-medium text-slate-600 dark:text-slate-400">Payment Mode</label>
                    <select
                        id="paymentMode"
                        name="paymentMode"
                        value={data.paymentMode}
                        onChange={onInputChange}
                        className="w-full p-2 border border-slate-300 dark:border-slate-600 rounded-md bg-slate-50 dark:bg-slate-700 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
                    >
                        <option>Cash</option>
                        <option>Card</option>
                        <option>UPI</option>
                    </select>
                </div>
            </FormSection>

            <FormSection title="Fuel Details">
                 <div className="flex flex-col">
                    <label htmlFor="product" className="mb-1 text-sm font-medium text-slate-600 dark:text-slate-400">Fuel Type</label>
                    <select
                        id="product"
                        name="product"
                        value={data.product}
                        onChange={onInputChange}
                        className="w-full p-2 border border-slate-300 dark:border-slate-600 rounded-md bg-slate-50 dark:bg-slate-700 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
                    >
                        <option>Petrol</option>
                        <option>Diesel</option>
                        <option>CNG</option>
                        <option>Power Petrol</option>
                        <option>Premium Diesel</option>
                    </select>
                </div>
                 <InputGroup label="Rate" name="rate" value={data.rate.toString()} onChange={onInputChange} type="number" step="0.01" />
                 <InputGroup label="Amount" name="amount" value={data.amount.toString()} onChange={onInputChange} type="number" step="0.01" />
                 <InputGroup label="Volume" name="volume" value={data.volume.toString()} onChange={onInputChange} type="number" step="0.01" />
            </FormSection>
        </form>
         <button 
              onClick={onReset}
              className="w-full mt-4 px-4 py-2 bg-slate-600 text-white rounded-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 dark:bg-slate-700 dark:hover:bg-slate-600 dark:focus:ring-offset-slate-800 transition duration-150 ease-in-out"
            >
              Reset to Default
            </button>
    </div>
  );
};

export default ReceiptForm;