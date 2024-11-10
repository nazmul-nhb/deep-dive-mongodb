// db.test.updateOne(
//     { "_id": ObjectId("6406ad63fc13ae5a40000065") },
//     {
//         $set: {
//             "address.city": "Sirajganj",
//             "address.country": "Bangladesh",
//         }
//     }
// )

// Using positional operator .$. in array
// db.test.updateOne(
//     { "_id": ObjectId("6406ad63fc13ae5a40000065"), "education.major": "Art" },
//     {
//         $set: {
//             "education.$.major": "Literature",
//         }
//     }
// )

db.test.updateOne(
    { "_id": ObjectId("6406ad63fc13ae5a40000065") },
    {
        $inc: {
            age: 1
        }
    }
)