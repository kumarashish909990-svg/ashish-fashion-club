import mongoose,{Schema,models,model} from "mongoose";
const Address = new Schema({label:String,name:String,phone:String,line1:String,line2:String,city:String,state:String,pincode:String,isDefault:Boolean});
const UserSchema = new Schema({
 name:String,email:{type:String,lowercase:true,sparse:true},phone:{type:String,sparse:true},
 passwordHash:String,role:{type:String,enum:["CUSTOMER","OWNER","MANAGER","PACKER"],default:"CUSTOMER"},
 addresses:[Address],isActive:{type:Boolean,default:true}
},{timestamps:true});
export default models.User || model("User",UserSchema);