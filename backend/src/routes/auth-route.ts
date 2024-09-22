import express from "express";
import {  getMe, logout, signin, sigup } from "../controllers/auth-controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get('/me',protectRoute,getMe)

router.post("/signin", signin);

router.post("/logout", logout);

router.post("/signup", sigup);

export default router;
