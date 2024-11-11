db.test.aggregate([
    // Stage #1 => Group by field names
    {
        $group: {
            _id: "$address.country",
            // personName: { $push: "$name" },
            totalPeople: { $sum: 1 },
            people: { $push: "$$ROOT" }
        }
    },
    // Stage #2
    {
        $addFields: { country: "$_id" },
    },
    // Stage #3
    { $project: { country: 1, _id: 0, totalPeople: 1, "people._id": 1, "people.name": 1, "peoplepeople.email": 1 } }
])
