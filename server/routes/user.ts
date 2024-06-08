import express from "express";
import { getUser } from "../controllers/user";
import { authorizeUser } from "../middlewares/authorization";

const router = express.Router();

router.post("/getUser", authorizeUser, getUser);

export default router;
