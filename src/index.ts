import express, {Application, Request, Response} from 'express';
import dotenv from 'dotenv';

import connectDB from './config/connectDB';
import appRouter from './presentation/routes/apiRoutes';
import errorMiddleware from './presentation/middleware/errorMiddleware';

dotenv.config()

connectDB()


const app: Application = express()
const PORT : Number = 8000;

app.use(express.json())

app.get("/", (req: Request, res: Response) => {
    res.json({message: "test message form the Teamsync server"})
})

app.use("/api", appRouter)


app.use(errorMiddleware); 

app.listen(PORT, () => {
    console.log(`server start at PORT ${PORT}`)
})