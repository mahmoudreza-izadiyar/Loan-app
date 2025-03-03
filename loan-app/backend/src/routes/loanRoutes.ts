import express from 'express';
import { validateLoanApplication } from '../middleware/validation';
import { getLenderOffers } from '../services/loanService';

const router = express.Router();

router.post('/loan-application', validateLoanApplication, (req, res) => {
    const { amount, deposit, term } = req.body;
    const lenders = getLenderOffers(amount, deposit, term);
    res.json(lenders);
});

export default router;
