import express from 'express';
import { userLogin, userRegisteration} from '../controllers/authController.js';

const router = express.Router();

//register
router.post('/register',userRegisteration);

//login
router.post('/login',userLogin);


export default router;