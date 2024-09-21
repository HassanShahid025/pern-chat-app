import express from 'express';

const router = express.Router();

router.get('/messages', (req, res) => {
  res.send('Messages');
});

router.get('/messages/:id', (req, res) => {
  res.send('Message ' + req.params.id);
});

router.post('/messages', (req, res) => {
  res.send('Message created');
});

export default router;