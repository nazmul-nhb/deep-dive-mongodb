// db.test.aggregate([
//     // Stage #1 => unwind stage => unwind creates several docs from an array
//     {
//         $unwind: "$friends"
//     },
//     // Stage #2
//     {
//         $group: {
//             _id: "$friends",
//             count: { $sum: 1 }
//         }
//     }
// ])

db.test.aggregate([
    // Stage #1 => unwind stage => aim is to split an array
    {
        $unwind: "$interests"
    },
    // Stage #2
    {
        $group: {
            _id: "$age",
            interestsPerAge: { $push: "$interests" }
        }
    },
    // Stage #3
    {
        $project: { age: "$_id", _id: 0, interestsPerAge: 1 }
    }
])