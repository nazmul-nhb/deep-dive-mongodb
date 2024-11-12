db.orders.aggregate([
    // Stage #1
    {
        $lookup: {
            from: "test",
            localField: "userId",
            foreignField: "_id",
            as: "user"
        }
    }
])