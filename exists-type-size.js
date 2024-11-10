// Exists, Type, Size

// db.test.find({ age: { $exists: true } })
// db.test.find({ age: { $exists: false } })
// db.test.find({ company: { $exists: true } })
// db.test.find({ age: { $type: 'string' } })
// db.test.find({ friends: { $size: 4 } }).project({ firends: 1 }) // size checks for array lengthh
// db.test.find({ friends: { $size: 0 } }).project({ firends: 1 })
db.test.find({ company: { $type: "null" } }).project({ company: 1 })