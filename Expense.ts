import mongoose,{Schema,models,model} from "mongoose";
const ExpenseSchema = new Schema({category:{type:String,enum:["PACKAGING","SHIPPING","ADS","SALARY","RENT","OTHER"]},amount:{type:Number,required:true},note:String,date:{type:Date,default:Date.now},createdBy:Schema.Types.ObjectId},{timestamps:true});
export default models.Expense || model("Expense",ExpenseSchema);