// db.test.find({ age: { $ne: 15, $lte: 30 } }) // implicit and 

// Explicit and/or operators
db.test.find({
    $or: [
        { interests: "Gaming" },
        { interests: "Reading" }
    ],
    $and: [
        { gender: "Female" },
        { age: { $ne: 15 } },
        { age: { $lte: 30 } },
    ]
})
    .project({
        age: 1,
        gender: 1,
        interests: 1
    })
    .sort({ age: -1 })

 // nested filtering + explicit or ($in implicit or)
db.test.find({
    $or: [
        { "skills.name": "JAVASCRIPT" },
        { "skills.name": "PYTHON" }
    ]
}).project({skills:1})