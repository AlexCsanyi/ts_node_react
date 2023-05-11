import express from "express";
import * as timeController from "./controllers/time.controller";

export const timeRouter = express.Router();
timeRouter.get("/", timeController.getTimeHandler);
