import { Request, Response } from "express";
import { prisma } from "../utilities/database";

const getUser = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.user.id,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    return res.json(user);
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Something went wrong, please try again." });
  }
};

export { getUser };
