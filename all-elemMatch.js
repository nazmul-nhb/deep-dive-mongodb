// Match exact order of interests in the array
// db.test.find({ interests: ["Travelling", "Gaming", "Reading"] }).project({ interests: 1 })

// Match all elements in the array
// db.test.find({ interests: { $all: ["Travelling", "Gaming", "Reading"] } }).project({ interests: 1 })

// db.test.find({ "skills.name": "JAVASCRIPT", "skills.level": "Expert" }).project({ skills: 1 }) // will not work

// Exact match (with exact order) like the array
// db.test.find({
//     skills: {
//         name: "JAVASCRIPT",
//         level: "Expert",
//         isLearning: true
//     }
// }).project({ skills: 1 })

// Handle Properly using $elemMatch: {}
db.test.find({
    skills: {
        $elemMatch: {
            name: "JAVASCRIPT",
            level: "Expert",
        }
    }
}).project({ skills: 1 })
