import express from 'express';
import adminAuthRouter from './adminAuthRoutes';

const app = express.Router()

app.use("/auth", adminAuthRouter)

export default app;