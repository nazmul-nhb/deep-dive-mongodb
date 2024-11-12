db.test.aggregate([
    {
        $facet: {
            // Pipeline #1 
            friendsCount: [
                // Stage #1 
                { $unwind: "$friends" },
                // Stage #2
                { $group: { _id: "$friends", count: { $sum: 1 } } },
                {
                    $project: { _id: 0, friend: "$_id", count: 1 }
                }
            ],
            // Pipeline #2
            interestsCount: [
                // Stage #1
                {
                    $unwind: "$interests"
                },
                // Stage #2
                {
                    $group: { _id: "$interests", count: { $sum: 1 } }
                },
                {
                    $project: { _id: 0, interest: "$_id", count: 1 }
                }
            ],
            // Pipeline #3
            skillsCount: [
                {
                    $unwind: "$skills"
                },
                {
                    $group: { _id: "$skills", count: { $sum: 1 } }
                },

                {
                    $project: { _id: 0, skill: "$_id", count: 1 }
                }
            ]
        }
    }
])