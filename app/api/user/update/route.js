import mongoose from "mongoose";
import User from "@/models/User";

export async function PATCH(req) {
  console.log("Request received:", req.method);

  try {
    // Parse JSON from the request body
    const body = await req.json();
    const { 
      email, 
      username, 
      first_name, 
      last_name, 
      phone, 
      profilepic, 
      coverpic, 
      password, 
      rozorpayid, 
      rozorpaysecret 
    } = body;

    // Validate required fields
    if (!email) {
      return new Response(
        JSON.stringify({ message: "Email is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Connect to the database if not already connected
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect("mongodb://localhost:27017/donateus");
    }

    // Update user details in the database
    const updatedUser = await User.findOneAndUpdate(
      { email },
      {
        username: username || undefined,
        first_name: first_name || undefined,
        last_name: last_name || undefined,
        phone: phone || undefined,
        password: password || undefined,
        rozorpayid: rozorpayid || undefined,
        rozorpaysecret: rozorpaysecret || undefined,
        profilepic: profilepic || undefined,
        coverpic: coverpic || undefined,
        updatedAt: Date.now(),
      },
      { new: true } // Return the updated document
    );

    if (!updatedUser) {
      return new Response(
        JSON.stringify({ message: "User not found" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ message: "User updated successfully", user: updatedUser }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error updating user:", error);
    return new Response(
      JSON.stringify({ message: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
