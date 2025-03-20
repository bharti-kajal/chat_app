import express from 'express';
import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });
import connectDB from './config/dbConfig.js';

const port = process.env.PORT_NUMBER || 3000;
const app = express();

app.listen(port, () => {
    console.log('Server is up and running up on port:', port);
    connectDB();
});

