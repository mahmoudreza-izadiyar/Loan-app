import { calculateMonthlyPayment } from '../services/loanService';

test('calculates correct monthly payment', () => {
    const payment = calculateMonthlyPayment(10000, 5, 5);
    expect(payment).toBeCloseTo(188.71, 2);
});
