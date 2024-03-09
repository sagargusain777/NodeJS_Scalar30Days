import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    content: {
      name: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
    },
    sub_todo: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo",
      },
    ],
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);
