import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import foodRoutes from './routes/foodRoutes.js';
import mealPlanRoutes from './routes/mealPlanRoutes.js';


dotenv.config();
const app = express();


app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });


app.use('/api/users', userRoutes);
app.use('/api/foods', foodRoutes);
app.use('/api/mealplans', mealPlanRoutes);


app.listen(5000, () => console.log('Server running on port 5000'));
