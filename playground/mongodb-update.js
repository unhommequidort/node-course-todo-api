const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017",
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to MongoDB server");
    }

    console.log("Connected to MongoDB server");
    const db = client.db("TodoApp");

    db.collection("Users")
      .findOneAndUpdate(
        { _id: new ObjectID("5b57b2cd899119d8eb818b99") },
        {
          $inc: { age: 1 },
          $set: { name: "Charlie" }
        },
        { returnOriginal: false }
      )
      .then(result => {
        console.log(result);
      });

    // client.close();
  }
);
