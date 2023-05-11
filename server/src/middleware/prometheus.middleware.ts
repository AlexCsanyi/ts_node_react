import * as dotenv from "dotenv";
import expressPrometheus from "express-prometheus-middleware";

dotenv.config();
const AUTH: string = process.env.SECRET_API_KEY as string;

const prometheusMiddleware = expressPrometheus({
    metricsPath: "/metrics",
    collectDefaultMetrics: true,
    authenticate: (req) => req.headers.authorization === AUTH,
});

export default prometheusMiddleware;
