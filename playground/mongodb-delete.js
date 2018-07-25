const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017",
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to MongoDB server");
    }

    console.log("Connected to MongoDB server");
    const db = client.db("TodoApp");

    // deleteMany
    // db.collection("Users")
    //   .deleteMany({ name: "Jeff" })
    //   .then(result => {
    //     console.log(result);
    //   });

    // deleteOne
    // db.collection("Todos")
    //   .deleteOne({ text: "Eat lunch" })
    //   .then(result => {
    //     console.log(result);
    //   });

    // findOneAndDelete
    db.collection("Users")
      .findOneAndDelete({ _id: new ObjectID("5b57cc073ec05ed97b23613b") })
      .then(result => {
        console.log(result);
      });

    // client.close();
  }
);
