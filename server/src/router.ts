import express from "express";
import * as timeController from "./controllers/time.controller";
import isAuthMiddleware from "./middleware/auth.middleware";

export const timeRouter = express.Router();
timeRouter.get("/", isAuthMiddleware, timeController.getTimeHandler);
