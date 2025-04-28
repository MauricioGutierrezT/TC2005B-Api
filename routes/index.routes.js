import { Router } from "express";
import { callout, bounce, saludo, alphabet } from "../controllers/index.controllers.js";
const router = Router();

router.get("/",saludo);
router.get("/ping",bounce);
router.get("/marco",callout);
router.get("/a/b/c",alphabet);

export default router;