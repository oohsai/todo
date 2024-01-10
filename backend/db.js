const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://galaxym515fzbd:Iqs6GTLHElWgcdMf@cluster0.hp9x69c.mongodb.net/todos"
);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
