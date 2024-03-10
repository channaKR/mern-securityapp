import express  from "express";
import { Login, signUp } from "../controller/auth.controller.js";

const router = express.Router();

router.post('/signup',signUp);
router.post('/',Login);

export default router;