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
  const { firstName, lastName, emailAddress, dateOfBirth, accountType } =
    req.body;

  try {
    await RegisterFormSchema.validate(req.body);

    const userExists = await prisma.user.findUnique({
      where: {
        email_address: emailAddress,
      },
    });

    if (userExists) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        loggedIn: false,
        message: "User already exists, please sign in.",
      });
    }

    const password = await bcrypt.hash(req.body.password, 10);

    const newUser = await prisma.user.create({
      data: {
        first_name: firstName,
        last_name: lastName,
        email_address: emailAddress,
        account_type: accountType,
        date_of_birth: new Date(dateOfBirth),
        password,
      },
    });

    jwtSign({ id: newUser.id }, process.env.JWT_SECRET_TOKEN!, {
      expiresIn: process.env.JWT_TOKEN_EXPIRATION_TIME!,
    })
      .then((token) => {
        res.json({
          loggedIn: true,
          token,
        });
      })
      .catch((error: Error) => {
        res.json({ loggedIn: false, error });
      });
  } catch (error) {
    if (error instanceof ValidationError) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: error.errors[0] });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      loggedIn: false,
      message: "Something went wrong, please try again.",
    });
  } finally {
    await prisma.$disconnect();
  }
};

const login = async (req: Request, res: Response) => {
  const { emailAddress, password } = req.body;

  try {
    await LoginFormSchema.validate(req.body);

    const user = await prisma.user.findUnique({
      where: {
        email_address: emailAddress,
      },
    });

    if (!user) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ loggedIn: false, message: "Incorrect credentials" });
    }

    const passwordIsCorrect = await bcrypt.compare(password, user.password);

    if (!passwordIsCorrect) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ loggedIn: false, message: "Incorrect password" });
    }

    jwtSign({ id: user.id }, process.env.JWT_SECRET_TOKEN!, {
      expiresIn: process.env.JWT_TOKEN_EXPIRATION_TIME!,
    })
      .then((token) => {
        res.json({ loggedIn: true, token });
      })
      .catch((error: Error) => {
        res.json({ loggedIn: false, error });
      });
  } catch (error) {
    if (error instanceof ValidationError) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ loggedIn: false, message: error.errors[0] });
    }

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      loggedIn: false,
      message: "Something went wrong, please try again.",
    });
  } finally {
    await prisma.$disconnect();
  }
};

const handleSession = async (req: Request, res: Response) => {};

export { register, login, handleSession };
