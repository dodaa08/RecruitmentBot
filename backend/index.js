import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("working on default route...");
});

const PORT = process.env.PORT; 

app.listen(PORT, () => {
    console.log(`Running on ${PORT}`);
});
