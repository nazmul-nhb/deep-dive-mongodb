// db.test.updateOne(
//     { "_id": ObjectId("6406ad63fc13ae5a40000065") },
//     { $unset: { skills: 1 } }
// )

// remove element from array (last element 1, first element -1)
// db.test.updateOne(
//     { "_id": ObjectId("6406ad63fc13ae5a40000065") },
//     { $pop: { interests: -1 } }
// )

// $pull removes exact matching element from an array
// db.test.updateOne(
//     { "_id": ObjectId("6406ad63fc13ae5a40000065") },
//     { $pull: { friends: "Mir Hussain" } }
// )

// $pullAll removes exact matching elements from an array
db.test.updateOne(
    { "_id": ObjectId("6406ad63fc13ae5a40000065") },
    { $pullAll: { friends: ["Tanmoy Parvez", "Abdur Rakib"] } }
)
