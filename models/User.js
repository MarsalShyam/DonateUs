import mongoose from 'mongoose';
const {Schema,model}=mongoose;

const UserSchema=new Schema({
first_name:{type:String, requird:true},
last_name:{type:String, requird:true},
company_name:{type:String},
phone:{type:String,requierd:true},
profilepic:{type:String},
coverpic:{type:String},
createdAt:{type:Date,default:Date.now},
updatedAt:{type:Date,default:Date.now}
});

// const User=model("User",UserSchema);
export default mongoose.models.User || model("User",UserSchema);
