import * as express from "express";
import dbConnection from "../db-connection";

const router = express.Router();

router.get(
    "/",
    (req, res, next) => {
        dbConnection.query('select * from sample', (err, result, fields) => {
            if (err) {
                res.sendStatus(500);
                return;
            }
            res.send(result);
        });
    }
);

export default router;