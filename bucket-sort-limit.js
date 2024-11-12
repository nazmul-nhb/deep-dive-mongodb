db.test.aggregate([
    // Stage #1
    {
        $bucket: {
            groupBy: "$age",
            boundaries: [0, 20, 40, 60],
            default: "Older than 60",
            output: {
                "count": { $sum: 1 },
                "people": { $push: "$$ROOT" }
            }
        }
    },
    // Stage #2
    {
        $sort: { "people.age": 1 }
    },
    // Stage #3
    {
        $limit: 2
    },
    {
        $project: {
            _id: 0,
            ageGroup: "$_id",
            count: 1,
            "people.name": 1,
            "people.age": 1,
            "people.interests": 1,
        }
    }
])