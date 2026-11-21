import mongoose,{Schema,models,model} from "mongoose";
const Item = new Schema({productId:Schema.Types.ObjectId,name:String,image:String,sku:String,quantity:Number,unitPrice:Number,size:String,color:String});
const OrderSchema = new Schema({
 orderNumber:{type:String,unique:true,index:true},customerId:Schema.Types.ObjectId,
 customer:{name:String,email:String,phone:String},items:[Item],
 shippingAddress:{line1:String,line2:String,city:String,state:String,pincode:String},
 subtotal:Number,discount:Number,shipping:Number,tax:Number,total:Number,
 paymentMethod:{type:String,enum:["UPI","CARD","NETBANKING","COD"]},
 paymentStatus:{type:String,enum:["PENDING","PAID","FAILED","REFUNDED"],default:"PENDING"},
 status:{type:String,enum:["PLACED","PACKED","SHIPPED","DELIVERED","CANCELLED","RETURNED"],default:"PLACED"},
 trackingNumber:String,notes:String
},{timestamps:true});
export default models.Order || model("Order",OrderSchema);