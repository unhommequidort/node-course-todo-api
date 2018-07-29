const { ObjectId } = require("mongodb");
const { mongoose } = require("../server/db/mongoose");
const { Todo } = require("../server/models/todo");
const { User } = require("../server/models/user");

const id = "5b5e120ace33b8fc63bfd40f";

// if (!ObjectId.isValid(id)) {
//   console.log("ID not valid");
// }

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log("====================================");
//   console.log("Todos", todos);
//   console.log("====================================");
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log("====================================");
//   console.log("Todo", todo);
//   console.log("====================================");
// });

// Todo.findById(id)
//   .then(todo => {
//     if (!todo) {
//       return console.log("ID not found");
//     }
//     console.log("====================================");
//     console.log("Todo by id", todo);
//     console.log("====================================");
//   })
//   .catch(e => {
//     console.log(e);
//   });

User.findById(id).then(
  user => {
    if (!user) {
      return console.log("User not found");
    }
    console.log(JSON.stringify(user, null, 2));
  },
  e => {
    console.log(e);
  }
);
