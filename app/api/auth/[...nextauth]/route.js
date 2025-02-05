import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import mongoose from "mongoose";
import User from "@/models/User"
import Payment from "@/models/Payment"

export const authOptions = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],

  
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {

      if(account.provider=="github"){
        //Connect to the datebase
        const client=await mongoose.connect("mongodb://localhost:27017/donateus")
        //check if the user already exists in the database
        const currentUser=User.findOne({email:email})
        if(!currentUser){
          //create a new user
          const newUser=new User({
            email:email,
            username:email.split("@")[0],
          })
          await newUser.save();
          user.name=newUser.username;
        }
        else{
          user.name=currentUser.username
        }
        return true;
      }
      
    },
    // async redirect({ url, baseUrl }) {
    //   return baseUrl
    // },
    // async session({ session, user, token }) {
    //   return session
    // },
    // async jwt({ token, user, account, profile, isNewUser }) {
    //   return token
    // }

}
})

export {authOptions as GET, authOptions as POST}
