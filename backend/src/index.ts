import express from 'express';
import authRoutes from './routes/auth-route.js';
import messageRoutes from './routes/message-route.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World 2');
});

app.use("/api/v1/auth",authRoutes)
app.use("/api/v1/messages",messageRoutes)

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
 
