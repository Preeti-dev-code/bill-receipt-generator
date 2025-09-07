import React, { useRef } from 'react';
import { ReceiptData } from '../types';
import BrandLogo from './BrandLogo';
import { toWords } from '../utils/numberToWords';

// Allow html2canvas to be used from the global scope
declare const html2canvas: any;

const DashedLine = () => <div className="border-t border-dashed border-black my-1"></div>;

const PaddedLine = ({ label, value, separator = ':', labelWidth = 14 }: { label: string; value: string | number; separator?: string; labelWidth?: number }) => (
    <div className="whitespace-pre">
        <span>{label.padEnd(labelWidth)}</span>
        <span>{separator}</span>
        <span> {value}</span>
    </div>
);

const ModernReceipt = ({ data }: { data: ReceiptData }) => (
    <div className="w-[320px] mx-auto p-4 bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-lg shadow-lg font-sans">
        {/* Header */}
        <div className="text-center border-b pb-4 border-slate-200 dark:border-slate-600">
            <div className="w-20 h-20 mx-auto mb-2 flex items-center justify-center">
                <BrandLogo brand={data.brand} template={data.template} />
            </div>
            <h3 className="font-bold text-xl uppercase">{data.stationName}</h3>
            <p className="text-xs whitespace-pre-wrap text-slate-500 dark:text-slate-400">{data.stationAddress}</p>
        </div>

        {/* Transaction Details */}
        <div className="py-4 border-b border-slate-200 dark:border-slate-600 text-sm space-y-2">
            <div className="flex justify-between">
                <span className="text-slate-500 dark:text-slate-400">Date</span>
                <span className="font-mono font-semibold">{data.date}</span>
            </div>
            <div className="flex justify-between">
                <span className="text-slate-500 dark:text-slate-400">Time</span>
                <span className="font-mono font-semibold">{data.time}</span>
            </div>
             <div className="flex justify-between">
                <span className="text-slate-500 dark:text-slate-400">Receipt No.</span>
                <span className="font-mono font-semibold">{data.receiptNo}</span>
            </div>
            <div className="flex justify-between">
                <span className="text-slate-500 dark:text-slate-400">Vehicle No.</span>
                <span className="font-mono font-semibold">{data.vehicleNo}</span>
            </div>
        </div>

        {/* Fuel Details */}
        <div className="py-4 border-b border-slate-200 dark:border-slate-600 text-sm space-y-2">
            <div className="flex justify-between font-semibold">
                <span>{data.product}</span>
                <span>{data.volume.toFixed(2)} L</span>
            </div>
            <div className="flex justify-between text-slate-500 dark:text-slate-400">
                <span>Rate</span>
                <span>₹ {data.rate.toFixed(2)} / L</span>
            </div>
        </div>

        {/* Total */}
        <div className="py-4 space-y-2">
             <div className="flex justify-between text-sm">
                <span className="text-slate-500 dark:text-slate-400">Payment Mode</span>
                <span className="font-semibold">{data.paymentMode}</span>
            </div>
            <div className="flex justify-between items-center text-2xl font-bold">
                <span>Total</span>
                <span>₹{data.amount.toFixed(2)}</span>
            </div>
             <p className="text-right text-xs capitalize text-slate-500 dark:text-slate-400">{toWords(data.amount)} Rupees Only</p>
        </div>
        
        {/* Footer */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-600 text-center text-xs text-slate-500 dark:text-slate-400">
            <p>Thank you for choosing us!</p>
            <p>Please visit again.</p>
        </div>
    </div>
);


const IndianOilReceipt = ({ data }: { data: ReceiptData }) => (
    <div className="w-[320px] mx-auto p-3 bg-gradient-to-b from-gray-200 via-gray-100 to-gray-200 text-black font-receipt text-xl shadow-lg leading-relaxed">
        {/* Header */}
        <div className="text-center mb-3">
            <div className="w-20 h-16 mx-auto mb-2 flex items-center justify-center">
                <BrandLogo brand={data.brand} template={data.template} />
            </div>
            <p className="font-bold text-2xl">IndianOil</p>
            <p className="">Welcomes You</p>
        </div>

        {/* Transaction Info */}
        <div className="space-y-1">
            <PaddedLine label="Receipt No." value={data.receiptNo} />
            <PaddedLine label="Local ID" value="Not Available" />
            <PaddedLine label="FIP No." value="1" />
            <PaddedLine label="Nozzle No." value="4" />
            <PaddedLine label="Product" value={data.product} />
        </div>

        <div className="my-3 space-y-1">
            <PaddedLine label="Preset Type" value="AMOUNT" />
            <PaddedLine label="Rate(Rs/L)" value={data.rate.toFixed(2)} />
            <PaddedLine label="Volume(L)" value={data.volume.toFixed(2)} />
            <PaddedLine label="Amount(Rs)" value={data.amount.toFixed(2)} />
            <PaddedLine label="Atot" value="" />
            <PaddedLine label="Vtot" value="" />
        </div>
        
        <div className="my-3 space-y-1">
            <PaddedLine label="Vehicle No" value={data.vehicleNo} />
            <PaddedLine label="Mobile No" value="Not Entered" />
        </div>

        <div className="my-3 space-y-1">
            <PaddedLine label="Date" value={data.date} />
            <PaddedLine label="Time" value={data.time} />
        </div>

        <div className="my-3 space-y-1">
            <PaddedLine label="ATTENDANT ID" value="Not Available" labelWidth={14}/>
            <PaddedLine label="FCC DATE" value="Not Available" labelWidth={14}/>
            <PaddedLine label="FCC TIME" value="Not Available" labelWidth={14}/>
        </div>

        {/* Footer */}
        <p className="text-center text-base mt-4">
            Thanks You! Please Visit Again..
        </p>
    </div>
);


const DefaultReceipt = ({ data }: { data: ReceiptData }) => {
    const isHP = data.brand === 'Hindustan Petroleum';
    const isIndianOil = data.brand === 'Indian Oil';
    const isBharat = data.brand === 'Bharat Petroleum';

    return (
        <div className="w-[320px] mx-auto p-3 bg-gradient-to-b from-gray-200 via-gray-100 to-gray-200 text-black font-receipt text-lg shadow-lg leading-snug">
            {/* Header */}
            <div className="text-center mb-2">
                <div className="w-20 h-16 mx-auto mb-2 flex items-center justify-center">
                    <BrandLogo brand={data.brand} template={data.template} />
                </div>
                <p className="font-bold uppercase">{isIndianOil ? `${data.brand} Welcomes You` : 'WELCOME!!!'}</p>
                <p className="uppercase">{data.stationName}</p>
                <p className="text-sm whitespace-pre-wrap">{data.stationAddress}</p>
            </div>
            <DashedLine />
            {/* Transaction Info */}
            <div>
                {isHP ? (
                    <>
                        <PaddedLine label="Bill No" value={data.receiptNo} />
                        <PaddedLine label="Trns. ID" value={`00000${data.receiptNo}`.slice(-15)} />
                    </>
                ) : (
                    <PaddedLine label="Receipt No" value={data.receiptNo} />
                )}
                <div className="flex justify-between">
                    <span>Date: {data.date}</span>
                    <span>Time: {data.time}</span>
                </div>
                {!isHP && <PaddedLine label="VEH TYPE" value={data.product.includes('Diesel') ? 'DIESEL' : 'PETROL'} />}
                <PaddedLine label="VEH NO" value={data.vehicleNo} />
                {!isHP && <PaddedLine label="CUSTOMER NAME" value="" />}
            </div>
            <DashedLine />
            {/* Fuel Details */}
            {isHP ? (
                <div>
                    <PaddedLine label="Fuel" value={data.product.toUpperCase()} />
                    <PaddedLine label="Density" value="830.5kg/m3" />
                    <PaddedLine label="Preset" value={`Rs.${data.amount.toFixed(2)}`} />
                    <PaddedLine label="Rate" value={`Rs.${data.rate.toFixed(2)}`} />
                    <PaddedLine label="Sale" value={`Rs.${data.amount.toFixed(2)}`} />
                    <PaddedLine label="Volume" value={`${data.volume.toFixed(2)}L`} />
                </div>
            ) : (
                <div>
                    <div className="grid grid-cols-4 gap-1 font-bold">
                        <span className="col-span-1">PRODUCT</span>
                        <span className="text-right col-span-1">RATE/LTR</span>
                        <span className="text-right col-span-1">VOLUME</span>
                        <span className="text-right col-span-1">AMOUNT</span>
                    </div>
                    <div className="grid grid-cols-4 gap-1">
                        <span className="col-span-1 uppercase">{data.product}</span>
                        <span className="text-right col-span-1">{data.rate.toFixed(2)}</span>
                        <span className="text-right col-span-1">{data.volume.toFixed(2)}</span>
                        <span className="text-right col-span-1 font-bold">{data.amount.toFixed(2)}</span>
                    </div>
                </div>
            )}
            <DashedLine />
            {/* Totals */}
            <div className="my-1">
                <p className="capitalize">Amount In Words: {toWords(data.amount)} Rupees Only</p>
                <div className="flex justify-between font-bold">
                    <span>TOTAL:</span>
                    <span>Rs.{data.amount.toFixed(2)}</span>
                </div>
                <p>Payment Mode: {data.paymentMode}</p>
            </div>
            <DashedLine />
            {/* Footer */}
            <p className="text-center text-xs mt-2 uppercase">
                {isIndianOil || isBharat
                    ? 'Save Fuel Yaani Save Money !! Thanks for fuelling with us.'
                    : 'Thank You! Please Visit Again..'
                }
            </p>
        </div>
    );
};


const ReceiptPreview: React.FC<{ data: ReceiptData }> = ({ data }) => {
    const receiptRef = useRef<HTMLDivElement>(null);

    const handleSave = () => {
        const receiptElement = receiptRef.current;
        if (receiptElement) {
            html2canvas(receiptElement, {
                scale: 3,
                backgroundColor: null, 
                onclone: (document: Document) => {
                    const clonedElement = document.querySelector('.receipt-container');
                    if (clonedElement) {
                       (clonedElement as HTMLElement).style.margin = '0';
                    }
                }
            }).then((canvas: HTMLCanvasElement) => {
                const link = document.createElement('a');
                link.download = `receipt-${data.receiptNo}.png`;
                link.href = canvas.toDataURL('image/png');
                link.click();
            });
        }
    };
    
    const renderReceiptBody = () => {
        let receiptContent;
        switch (data.template) {
            case 'Modern Digital':
                receiptContent = <ModernReceipt data={data} />;
                break;
            case 'Classic Printer':
            default:
                receiptContent = data.brand === 'Indian Oil' 
                    ? <IndianOilReceipt data={data} /> 
                    : <DefaultReceipt data={data} />;
                break;
        }
            
        return <div ref={receiptRef} className="receipt-container">{receiptContent}</div>
    }

    return (
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-slate-800 dark:text-white">Receipt Preview</h2>
                <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 dark:focus:ring-offset-slate-800 transition duration-150 ease-in-out flex items-center gap-2"
                >
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    Save Bill
                </button>
            </div>
            {renderReceiptBody()}
        </div>
    );
};

export default ReceiptPreview;