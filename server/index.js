

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
dotenv.config();

import Connection from './database/db.js';
import router from './routes/route.js';
import defaultData from './default.js';
import paymentRoutes from "./routes/paymentRoutes.js";




const app = express();



app.use(cors());
app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',router);

app.use("/api/payment", paymentRoutes);

const PORT = 8000;

const username=process.env.DB_USERNAME
const password=process.env.DB_PASSWORD

// backend/index.js or app.js




Connection(username, password);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
defaultData();




