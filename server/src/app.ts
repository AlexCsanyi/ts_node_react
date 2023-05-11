import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { timeRouter } from "./router";
import prometheusMiddleware from "./middleware/prometheus.middleware";
import path from "path";

dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/time", timeRouter);
app.use(prometheusMiddleware);

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../../client/dist")));

console.log(path.resolve(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../../client/dist", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

export default app;
