import express from 'express';
import cors from 'cors';
import router from './src/routes/v1/index.js';
import 'dotenv/config';
import connectDB from './dbconnect.js';

const PORT = process.env.PORT;
console.log(PORT);

const app = express();

app.use(cors());
app.use(express.json());

const startServer = async()=>{

    await connectDB();

    app.use('/api/v1',router);

    app.get('/',(req,res) => {
        res.json({message: "Welcome!"})
    })

    app.listen(PORT, () => {console.log(`Backend running at http://localhost:${PORT}`)})
}

startServer();


