import { Request, Response } from "express";
import { prisma } from "../utilities/prismaConnect";
import StatusCodes from "http-status-codes";

const getUserProfile = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: req.user.id,
      },
      select: {
        id: true,
        email: true,
        subscribe_to_email: true,
      },
    });

    if (!user) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "User not found!" });
    }

    return res.json(user);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Something went wrong, please try again." });
  } finally {
    await prisma.$disconnect();
  }
};

export { getUserProfile };
