import mongoose ,{Schema,model}from "mongoose";

const commentSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true
    },
     date:{
        type:Date,
        default:Date.now
     }
},{
    timestamps:true
})

const Comment = model ("Comment",commentSchema)
 export default Comment;
