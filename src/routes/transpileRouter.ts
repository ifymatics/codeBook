import { Router } from "express";
import { transpileController } from "./../components/transpileController"
const router = Router();


router.post("/transpile", transpileController.postTranspile);


export default router;