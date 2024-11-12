db.test.aggregate([
    // Stage #1 => Group by field names
    {
        $group: {
            _id: null,
            totalSalary: { $sum: "$salary" },
            maxSalary: { $max: "$salary" },
            minimumSalary: { $min: "$salary" },
            averageSalary: { $avg: "$salary" }
        }
    },
    // Stage #2
    {
        $project: {
            totalSalary: 1,
            maximumSalary: "$maxSalary",
            minimumSalary: 1,
            averageSalary: 1,
            rangeMaxMin: { $subtract: ["$maxSalary", "$minimumSalary"] }
        }
    }
])
