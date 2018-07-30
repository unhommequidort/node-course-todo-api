const { ObjectId } = require("mongodb");

const { mongoose } = require("../server/db/mongoose");
const { Todo } = require("../server/models/todo");
const { User } = require("../server/models/user");

// Todo.remove({}).then(result => {
//   console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

// Todo.findByIdAndRemove("5b5e64d7ce33b8fc63bfdefa").then(todo => {
//   console.log(todo);
// });
