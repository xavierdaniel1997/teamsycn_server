import express, {Application, Request, Response} from 'express';


const app: Application = express()
const PORT : Number = 8000;

app.get("/", (req: Request, res: Response) => {
    res.json({message: "test message form the Teamsync server"})
})

app.listen(PORT, () => {
    console.log(`server start at PORT ${PORT}`)
})