import express from 'express'
const app = express();

import cors from 'cors'
app.use(cors())

import bodyParser from 'body-parser';
app.use(bodyParser.json());

import ApiRoute from './routes'
app.use("/api", ApiRoute)

app.listen(process.env.SV_PORT, () => {
    console.log(`Server on: ${process.env.SV}`)
})