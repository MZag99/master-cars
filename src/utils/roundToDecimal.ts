export const roundToDecimal = (number: number, decimal: number) =>
    Math.round(number * Math.pow(10, decimal)) / Math.pow(10, decimal);