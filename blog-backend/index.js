require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRouter = require('./routes/auth');
const postRouter = require('./routes/post');
const app = express(); 

app.use(express.json());
app.use(cors())

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/blog-travel', {            
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Ket noi Database thanh cong !!!')
    } catch (error) {
        console.log(error)
    }
}
connectDB();
    

app.use('/api/auth', authRouter);
app.use('/api/posts', postRouter)

const PORT = 8000;

app.listen(PORT, ()=> console.log(`Sever started on port ${PORT}`))