const mongoose = require("mongoose");
import * as dotenv from "dotenv";
dotenv.config();
mongoose.connect(process.env.MONGODB_URL);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
