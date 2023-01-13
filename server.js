import express from "express";
import morgan from "morgan";
import { config as dotenv } from 'dotenv';
import mongoose from 'mongoose';
import cors from "cors";

import * as models from "./connection.js";

const config = dotenv();

const app = express();
// const db = mongoose.connect(`${process.env.DB_URL}`);

app.use(morgan('tiny'));
app.use(cors({ origin: 'https:/localhost' }));

app.get('/members-data', (req, res) => {
    models.Members.find({}, (err, data) => {
        if (err) console.log(err);
        else return res.json(data);
      });
});

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Listening on port ${process.env.SERVER_PORT}...`)
});