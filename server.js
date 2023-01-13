import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";

const config = dotenv.config();

const app = express();

app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send("hello world");
})

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.SERVER_PORT}`);
})