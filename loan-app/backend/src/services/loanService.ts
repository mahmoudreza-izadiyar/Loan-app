export const calculateMonthlyPayment = (amount: number, rate: number, term: number): number => {
    const monthlyRate = rate / 12 / 100;
    const months = term * 12;
    return (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
};

export const getLenderOffers = (amount: number, deposit: number, term: number) => {
    const lenders = [
        { name: 'Lender A', interestRate: 5.5, fees: 10 },
        { name: 'Lender B', interestRate: 5.0, fees: 15 },
        { name: 'Lender C', interestRate: 6.0, fees: 0 },
    ];

    return lenders.map(lender => ({
        name: lender.name,
        monthlyRepayment: calculateMonthlyPayment(amount - deposit, lender.interestRate, term).toFixed(2),
        interestRate: `${lender.interestRate}% APR`,
        fees: `$${lender.fees}`
    }));
};
