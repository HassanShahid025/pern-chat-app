import express from 'express';
import protectRoute from '../middleware/protectRoute.js';
import { getMessages, getUserAllConversations, sendMessage } from '../controllers/message-controller.js';


const router = express.Router();

router.get('/getMessages/:id',protectRoute,getMessages)
router.get('/getUserAllConversations',protectRoute,getUserAllConversations)
router.post('/send/:id',protectRoute,sendMessage)

export default router;