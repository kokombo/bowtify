import { Request, Response } from "express";
import {
  LoginFormSchema,
  RegisterFormSchema,
} from "../utilities/validationSchemas";
import StatusCodes from "http-status-codes";
import * as bcrypt from "bcrypt";
import { jwtSign } from "../utilities/jwt";
import { ValidationError } from "yup";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const register = async (req: Request, res: Response) => {
  const { firstName, lastName, email, accountType, subscribeToEmail } =
    req.body;

  try {
    await RegisterFormSchema.validate(req.body);

    const userExists = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (userExists) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "User already exists, please sign in.",
      });
    }

    const password = await bcrypt.hash(req.body.password, 10);

    const newUser = await prisma.user.create({
      data: {
        first_name: firstName,
        last_name: lastName,
        email: email,
        account_type: accountType,
        subscribe_to_email: subscribeToEmail,
        password,
      },
    });

    if (accountType === "individual") {
      await prisma.individual_User.create({
        data: {
          user_id: newUser.id,
        },
      });
    } else {
      await prisma.business_User.create({
        data: {
          user_id: newUser.id,
        },
      });
    }

    jwtSign({ id: newUser.id }, process.env.JWT_SECRET_TOKEN!, {
      expiresIn: process.env.JWT_TOKEN_EXPIRATION_TIME!,
    })
      .then((token) => {
        res.json({
          accessToken: token,
          accountType: newUser.account_type,
        });
      })
      .catch((error: Error) => {
        res.json({ error });
      });
  } catch (error) {
    if (error instanceof ValidationError) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: error.errors[0] });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Something went wrong, please try again.",
    });
  } finally {
    await prisma.$disconnect();
  }
};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    await LoginFormSchema.validate(req.body);

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Incorrect credentials" });
    }

    const passwordIsCorrect = await bcrypt.compare(password, user.password);

    if (!passwordIsCorrect) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Incorrect password" });
    }

    jwtSign({ id: user.id }, process.env.JWT_SECRET_TOKEN!, {
      expiresIn: process.env.JWT_TOKEN_EXPIRATION_TIME!,
    })
      .then((token) => {
        res.json({ accessToken: token, accountType: user.account_type });
      })
      .catch((error: Error) => {
        res.json(error);
      });
  } catch (error) {
    if (error instanceof ValidationError) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: error.errors[0] });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: "Something went wrong, please try again.",
    });
  } finally {
    await prisma.$disconnect();
  }
};

const handleSession = async (req: Request, res: Response) => {};

export { register, login, handleSession };
