// db.test.updateOne(
//     { "_id": ObjectId("6406ad63fc13ae5a40000065") },
//     { $set: { "email": "mdangl1@odnoklassniki.pu", } }
// )

// db.test.updateOne(
//     { "_id": ObjectId("6406ad63fc13ae5a40000065") },
//     { $addToSet: { "skills": { $each: ["Mockery", "Fuckery"] } } }
// )

// For adding duplicates
db.test.updateOne(
    { "_id": ObjectId("6406ad63fc13ae5a40000065") },
    { $push: { "skills": { $each: ["Mockery", "Fuckery"] } } }
)