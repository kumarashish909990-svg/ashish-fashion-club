import mongoose, {Schema,models,model} from "mongoose";
const VariantSchema = new Schema({size:String,color:String,sku:String,stock:{type:Number,default:0}});
const ProductSchema = new Schema({
 name:{type:String,required:true,trim:true},slug:{type:String,required:true,unique:true},
 description:String,brand:String,category:{type:String,index:true},images:[String],
 price:{type:Number,required:true,min:0},compareAtPrice:Number,averageRating:{type:Number,default:0},
 reviewCount:{type:Number,default:0},variants:[VariantSchema],isActive:{type:Boolean,default:true},
 tags:[String]
},{timestamps:true});
export default models.Product || model("Product",ProductSchema);