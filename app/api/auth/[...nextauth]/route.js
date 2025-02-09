import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import mongoose from "mongoose";
import User from "@/models/User"; // Your Mongoose User schema

export const authOptions = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  callbacks: {
    // Handle the sign-in process
    async signIn({ user, account, profile }) {
      try {
        const email = profile?.email; // Retrieve the email from GitHub profile
        if (!email) {
          console.error("No email found in the GitHub profile.");
          return false; // Reject sign-in if email is missing
        }

        // Connect to the database if not already connected
        if (mongoose.connection.readyState !== 1) {
          await mongoose.connect("mongodb://localhost:27017/donateus", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
        }

        // Check if the user already exists in the database
        let existingUser = await User.findOne({ email });

        if (!existingUser) {
          // Create a new user if they don't exist
          const newUser = new User({
            email: email,
            username: email.split("@")[0], // Generate username from email
            userId: new mongoose.Types.ObjectId(), // Generate a unique user ID
          });

          await newUser.save(); // Save the new user to the database
          console.log("New user created ram: ", newUser);
        } else {
          // If the user exists but has no username, update it
          if (!existingUser.username) {
            existingUser.username = email.split("@")[0];
            await existingUser.save(); // Save the updated user
            console.log("Updated existing user with username:", existingUser);
          } else {
            console.log("Existing user found:", existingUser);
          }
        }

        return true; // Allow sign-in
        
      } catch (error) {
        console.error("Error during signIn callback:", error);
        return false; // Reject sign-in on error
      }
    },

    // Add user information to the session
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
      }
      return session;
    },

    // Handle JSON Web Token
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
});

export { authOptions as GET, authOptions as POST };









// import NextAuth from "next-auth"
// import GithubProvider from "next-auth/providers/github"
// import mongoose from "mongoose";
// import User from "@/models/User"
// import Payment from "@/models/Payment"

// export const authOptions = NextAuth({
//   // Configure one or more authentication providers
//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//     // ...add more providers here
//   ],


//   // callbacks: {
//   //   async signIn({ user, account, profile, email, credentials }) {
//   //     try{

//   //       if(!email){
//   //         console.log("Error: No email found from Github");
//   //         return false;
//   //       }
//   //     if (account.provider == "github") {
//   //       //Connect to the datebase
//   //       if(mongoose.connection.readyState!=1){
//   //         const client = await mongoose.connect("mongodb://localhost:27017/donateus");
//   //       }
        
//   //       //check if the user already exists in the database
//   //       const currentUser =await User.findOne({ email: email });
//   //       //log info to console to check
//   //       console.log("Email:", user.email);
//   //       console.log("Existing User:", currentUser);

//   //       if (!currentUser) {
//   //         const username = email ? email.split("@")[0] : "default";
//   //         //create a new user
//   //         const newUser = new User({
//   //           email: email,
//   //           username: username,
//   //         });
//   //         await newUser.save();
//   //         user.name = newUser.username;
//   //       }
//   //       else {
//   //         user.name = currentUser.username
//   //       }
//   //       return true;
//   //     }
//   //   }catch(error){
//   //     console.log("error during signIn callBack:",error); 
//   //     return false;
//   //   }
//   //   },
//   //   // async redirect({ url, baseUrl }) {
//   //   //   return baseUrl
//   //   // },
//   //   // async session({ session, user, token }) {
//   //   //   return session
//   //   // },
//   //   // async jwt({ token, user, account, profile, isNewUser }) {
//   //   //   return token
//   //   // }

//   // }
// });

// export { authOptions as GET, authOptions as POST }
