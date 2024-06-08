import express from "express";
import { register, login } from "../controllers/auth";

const router = express.Router();

router.post("/signup", register);
router.post("/signin", login);

export default router;
