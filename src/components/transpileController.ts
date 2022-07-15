import { Request, Response, RequestHandler } from "express";
import { transform, } from "@babel/core";
export const transpileController = {

    postTranspile(req: Request, res: Response) {
        const { userId, code } = req.body;

        transform(code, function (err, result) {
            if (err) return res.status(500).json({ message: "error occured" });
            res.status(200).json({ code: result })
        });
    }
}