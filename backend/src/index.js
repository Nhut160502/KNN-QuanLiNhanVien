import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config";
import { errorHandler, clientErrorHandler } from "./middlewares/index.js";
import db from "./configs/db.js";
import router from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("./public"));

// connect database
db.connect();

// routers
app.use("/api", router);

// handle err
app.use(errorHandler);
app.use(clientErrorHandler);

app.listen(`${process.env.PORT}`, () => {
  console.log(`Server running on ${process.env.HOST}:${process.env.PORT}`);
});
