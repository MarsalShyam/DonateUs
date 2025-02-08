import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  first_name:{type:String,default:""},
  last_name:{type:String,default:""},
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true }, // Ensure this is populated when saving
  phone:{type:String,default:""},
  profilpic:{type:String,default:""},
  coverpic:{type:String,default:""},
  rozorpayid:{type:String,default:""},
  rozorpaysecret:{type:String,default:""},
  updatedAt: { type: Date, default: Date.now }, // Optional: Track user creation
  
});

export default mongoose.models.User || mongoose.model("User", UserSchema);






// import mongoose from 'mongoose';
// const {Schema,model}=mongoose;

// const UserSchema=new Schema({
// first_name:{type:String},
// last_name:{type:String, },
// user_name:{type:String,requird:true},
// phone:{type:String},
// profilepic:{type:String},
// email:{type:String,requird:true},
// coverpic:{type:String},
// createdAt:{type:Date,default:Date.now},
// updatedAt:{type:Date,default:Date.now}
// });

// // const User=model("User",UserSchema);
// export default mongoose.models.User || model("User",UserSchema);
