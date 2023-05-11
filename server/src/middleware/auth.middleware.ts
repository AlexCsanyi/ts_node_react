import { Request, Response, NextFunction } from "express";
import * as dotenv from "dotenv";

dotenv.config();
const AUTH: string = process.env.SECRET_API_KEY as string;

const isAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || authHeader !== AUTH) {
        res.status(403);
        res.send({ message: "Access Forbidden" });
        return;
    }

    next();
};

export default isAuthMiddleware;
