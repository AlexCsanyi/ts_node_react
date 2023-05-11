import expressPrometheus from "express-prometheus-middleware";

const prometheusMiddleware = expressPrometheus({
    metricsPath: "/metrics",
    collectDefaultMetrics: true,
    authenticate: (req) => req.headers.authorization === "test",
});

export default prometheusMiddleware;
