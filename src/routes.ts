import * as express from "express";
import sampleRouter from './sample/sample-router';
import mainRouter from './main/main-router';

const router = express.Router();
router.use('/', mainRouter);
router.use('/sample', sampleRouter);

export default router;