import express from "express";
import bodyParser from "body-parser";
import playerRouter from "./routes/playerRoutes.js";
import universityRouter from "./routes/universityRoutes.js";
import emailRouter from "./routes/emailRouter.js"
import dotenv from "dotenv";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import cors from "cors";


const app = express();
app.use(cors());
dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use("/api/player/", playerRouter);
app.use("/api/university/", universityRouter);
app.use("/api/email/", emailRouter);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
