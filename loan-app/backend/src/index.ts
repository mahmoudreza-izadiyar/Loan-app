import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import loanRoutes from './routes/loanRoutes';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', loanRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
