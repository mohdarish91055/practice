import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import router from './routes/authRoute.js';

dotenv.config();
const app = express();
app.use(express.json());

// Connect to the database
connectDB();

app.use('/api/auth',router);

const port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
});