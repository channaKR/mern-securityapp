import express from 'express'
import { apiapp } from '../controller/user.controller.js';


const router = express.Router();

router.get('/', apiapp);


export default router;