import express from 'express';
import testRoute from './testRoute';

const router = express.Router();

router.use(testRoute);

export default router;
