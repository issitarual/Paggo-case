import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import crypto from "crypto";
import { CreateUser, User } from "@/types/UserType";
import { fetchPostUser } from "@/helpers/api/User";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID || "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",

      }),
      CredentialsProvider({
        // The name to display on the sign in form (e.g. "Sign in with...")
        name: "Credentials",
        // `credentials` is used to generate a form on the sign in page.
        // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          username: { label: "Username", type: "text" },
          password: { label: "Password", type: "text" },
          email: { label: "email", type: "text" }
        },
        authorize: async (credentials: CreateUser) => {
          const { username, password, email }: CreateUser = credentials;
          await fetchPostUser(credentials)
        },
      }),
    // ...add more providers here
  ],
    async signIn({user}) {
      console.log("inside callback")
      await connectDB()
      console.log("connected",user)
      const u = await User.findOne({email:user.email})
      console.log("found",u) 
      const email = user.email;
      const name = user.name;
      if(!u){
        const newUser = new User({
          email,
          profile:{
            firstName:name
          }
        })
        await newUser.save();
      }
      return true
    }

  }

export default NextAuth(authOptions)