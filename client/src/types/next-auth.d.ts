import { DefaultSession, User } from "next-auth";
import NextAuth from "next-auth/next";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      accessToken?: string;
    } & DefaultSession["user"];
  }

  interface User {
    accessToken?: string;
    accountType?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
  }
}
