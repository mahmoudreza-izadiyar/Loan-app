import { Request, Response, NextFunction } from 'express';

export const validateLoanApplication = (req: Request, res: Response, next: NextFunction): void => {
    const { amount, deposit, term } = req.body;

    if (!amount || amount < 2000) {
        res.status(400).json({ error: 'Loan amount must be at least $2000' });
        return;
    }
    if (deposit < 0 || deposit > amount) {
        res.status(400).json({ error: 'Deposit must not exceed loan amount' });
        return;
    }
    if (term < 1 || term > 7) {
        res.status(400).json({ error: 'Loan term must be between 1 and 7 years' });
        return;
    }

    next(); // ✅ Ensure this is always called
};
