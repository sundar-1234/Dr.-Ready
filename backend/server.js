import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
//app config
const app = express();
const PORT = process.env.PORT || 4000;
connectDB();
connectCloudinary();
//middlewares
app.use(express.json());
app.use(cors()); //frontend connect with backend


//api endpoint

app.get('/',(req,res)=>{
    res.send('API working');
})

app.listen(PORT,()=>console.log('Server started',PORT));