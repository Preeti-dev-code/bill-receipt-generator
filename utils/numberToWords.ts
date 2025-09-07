// A simple number-to-words converter
const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
const thousands = ['', 'Thousand', 'Lakh', 'Crore'];

function numberToWords(num: number): string {
    if (num === 0) return 'Zero';

    let words = '';

    if (num >= 100) {
        words += `${ones[Math.floor(num / 100)]} Hundred `;
        num %= 100;
    }

    if (num >= 20) {
        words += `${tens[Math.floor(num / 10)]} `;
        num %= 10;
    }
    
    if (num >= 10) {
        words += `${teens[num - 10]} `;
        num = 0;
    }

    if (num > 0) {
        words += `${ones[num]} `;
    }

    return words.trim();
}

export function toWords(num: number): string {
    if (isNaN(num) || num < 0) return '';
    if (num === 0) return 'Zero';

    const crores = Math.floor(num / 10000000);
    const lakhs = Math.floor((num % 10000000) / 100000);
    const thousands = Math.floor((num % 100000) / 1000);
    const remainder = Math.floor(num % 1000);

    let result = '';

    if (crores > 0) {
        result += `${numberToWords(crores)} Crore `;
    }
    if (lakhs > 0) {
        result += `${numberToWords(lakhs)} Lakh `;
    }
    if (thousands > 0) {
        result += `${numberToWords(thousands)} Thousand `;
    }
    if (remainder > 0) {
        result += `${numberToWords(remainder)}`;
    }

    return result.trim();
}