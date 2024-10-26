import express from 'express';
import authRoutes from './routes/auth-route.js';
import messageRoutes from './routes/message-route.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { app, server } from './socket/socket.js'; //For socket.io

dotenv.config();
// const app = express(); //For normal ts backend without socket.io

app.use(express.json())
app.use(cookieParser())

app.get('/', (req, res) => {
  res.send('Hello World 2');
});

app.use("/api/v1/auth",authRoutes)
app.use("/api/v1/messages",messageRoutes)

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


//For normal ts backend without socket.io
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
 
