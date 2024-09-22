import express from 'express';
import authRoutes from './routes/auth-route.js';
import messageRoutes from './routes/message-route.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();

app.use(express.json())
app.use(cookieParser())

app.get('/', (req, res) => {
  res.send('Hello World 2');
});

app.use("/api/v1/auth",authRoutes)
app.use("/api/v1/messages",messageRoutes)

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
 
