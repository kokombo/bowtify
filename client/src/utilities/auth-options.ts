import { apiBaseUrl } from "@/constants/data";
import axios from "axios";
import type { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials, req) {
        const email = credentials?.email;
        const password = credentials?.password;

        return await axios
          .post(
            `${apiBaseUrl}/auth/signin`,
            { email, password },
            {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            }
          )
          .then((res) => {
            const user: User = res.data;

            if (user) {
              return user;
            }
            return null;
          })
          .catch((error) => {
            throw new Error(error?.response?.data?.message);
          });
      },
    }),
  ],

  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60,
  },

  callbacks: {
    async jwt({ token, user, trigger, account }) {
      if (account) {
        if (trigger === "signIn") {
          token.accessToken = user.accessToken;
          token.accountType = user.accountType;
          token.firstName = user.firstName;
          token.lastName = user.lastName;
        }
      }

      return token;
    },

    async session({ session, token }) {
      session.user.accessToken = token.accessToken;
      session.user.accountType = token.accountType;
      session.user.firstName = token.firstName;
      session.user.lastName = token.lastName;

      return session;
    },
  },

  pages: {
    signIn: "/account/login",
    signOut: "/account/logout",
  },
};
