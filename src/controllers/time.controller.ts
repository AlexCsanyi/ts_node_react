import { Request, Response } from "express";
import handleError from "../utils/handleError.util";
import * as timeService from "../services/time.service";

export function getTimeHandler(req: Request, res: Response) {
    try {
        const time: number = timeService.getServerTime();
        return res.status(200).json({ time });
    } catch (e) {
        handleError(e);
        return res.status(500).send({
            message: "An error occurd Please try again later.",
        });
    }
}
