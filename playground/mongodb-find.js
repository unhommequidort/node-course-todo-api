const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017",
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to MongoDB server");
    }

    console.log("Connected to MongoDB server");
    const db = client.db("TodoApp");

    // db.collection("Todos")
    //   .find({ _id: new ObjectID("5b57ae28f14049d7d74bc43c") })
    //   .toArray()
    //   .then(
    //     docs => {
    //       console.log("Todos");
    //       console.log(JSON.stringify(docs, null, 2));
    //     },
    //     err => {
    //       console.log("Unable to fetch todos", err);
    //     }
    //   );

    // db.collection("Todos")
    //   .find()
    //   .count()
    //   .then(
    //     count => {
    //       console.log("Todos count:", count);
    //     },
    //     err => {
    //       console.log("Unable to fetch todos", err);
    //     }
    //   );

    db.collection("Users")
      .find({ name: "Matthew Lyons" })
      .toArray()
      .then(
        docs => {
          console.log("Users");
          console.log(JSON.stringify(docs, null, 2));
        },
        err => {
          console.log("Unable to fetch user");
        }
      );

    // client.close();
  }
);
