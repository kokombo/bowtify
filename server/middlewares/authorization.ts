import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { prisma } from "../utilities/database";

export const authorizeUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer")) {
    const token = authHeader.split(" ")[1];

    try {
      const decodedToken = jwt.verify(
        token,
        process.env.JWT_SECRET as string
      ) as jwt.JwtPayload;

      const user = await prisma.user.findUnique({
        where: {
          id: decodedToken?.id,
        },
      });

      if (!user) {
        return res.status(401).json({
          message: "Session expired!. You are not currently logged in.",
        });
      }

      req.user = user;

      next();
    } catch (error) {
      return res.status(401).json({ message: "You are not authorized." });
    }
  } else {
    return res.status(401).json({ message: "Invalid authorization." });
  }
};
