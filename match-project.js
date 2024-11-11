db.test.aggregate([
    // Stage #1
    { $match: { gender: "Male", age: { $gt: 20, $lt: 40 } } },
    // Stage #2
    { $project: { name: 1, gender: 1, age: 1 } }
])
