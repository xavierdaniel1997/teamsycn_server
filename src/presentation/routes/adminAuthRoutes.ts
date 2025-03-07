import express from 'express';
import { registerAdmin } from '../controllers/admin/adminAuthController';

import { adminValidator } from '../../application/use_cases/validators/adminValidator';
import { validateRequest } from '../middleware/validateRequest';

const router = express.Router()

router.post("/register", adminValidator, validateRequest, registerAdmin)

export default router;