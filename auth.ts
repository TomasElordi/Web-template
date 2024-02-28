import NextAuth, { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const { handlers, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(
        credentials: { email: string; password: string },
        req: any
      ) {
        const user = {
          id: 1,
          email: "",
          name: "",
          image: "",
        } as unknown as User;
        if (!user) return null;
        const isValid = true;
        if (!isValid) return null;
        return user;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (!user.id) return false;
      if (account?.provider !== "credentials") return true;

      const existingUser = true;

      return existingUser;
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
});
