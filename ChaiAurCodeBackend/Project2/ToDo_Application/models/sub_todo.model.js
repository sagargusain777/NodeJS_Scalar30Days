
import mongoose from "mongoose";
const subTodoSchema = new mongoose.Schema({
 content :{
    type: String,
    required: true,
 },
  complete :{
    type: Boolean,
    default: false,
  },
   created_by :{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
   }


})
export const SubTodo = mongoose.model("SubTodo", subTodoSchema);