import mongoose,{Schema,model} from "mongoose";

const postShema = new mongoose.Schema({
    title:{
        type:String,
        required:true
     },
     user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
     },
     text:{
        type:String,
        requires:true
     },
     date:{
        type:Date,
        default:Date.now
     },
     comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment',
        required:true
     }]
},{
   timestamps:true
})

const Post=model("Post",postShema);
export default Post;

