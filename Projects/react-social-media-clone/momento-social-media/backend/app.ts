import express, { type Request, type Response, type NextFunction } from 'express';
import { config } from 'dotenv';
config()
const app = express()
const PORT = process.env.PORT


app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send(`<h1>Hello World</h1`)
    next()
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})