import express, { Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()
const port = process.env.PORT
const app = express()

const path = process.argv[2]

app.get('/', (req: Request, res: Response) => {
})
app.listen(port, () => console.log(`listening on port ${port}`))