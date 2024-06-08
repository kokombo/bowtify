import { Request, Response } from "express";
import { prisma } from "../utilities/prismaConnect";

const getUserProfile = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.user.id,
      },
      select: {
        id: true,
        first_name: true,
        last_name: true,
        email: true,
        subscribe_to_email: true,
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

export { getUserProfile };
