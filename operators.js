db.test.find(
    {
        gender: "Female",
        age:
            { $nin: [18, 20, 24] },
        interests: { $in: ["Cooking", "Gaming"] },
    },
    { name: 1, gender: 1, age: 1, interests: 1 })
    .sort({ age: 1 })

    // $in --> implicit or