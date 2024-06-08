import express from "express";
import { getUserProfile } from "../controllers/user";
import { authorizeUser } from "../middlewares/authorization";

const router = express.Router();

router.get("/getUserProfile", authorizeUser, getUserProfile);

export default router;
