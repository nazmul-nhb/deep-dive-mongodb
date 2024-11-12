// db.test.find({"_id" : ObjectId("6406ad63fc13ae5a40000066")}).explain("executionStats")
// db.test.find({"email" : "omirfin2@i2i.jp"}).explain("executionStats")

// indexing on single field
// db.getCollection("massive").createIndex({ email: 1 })

// drop index
// db.getCollection("massive").dropIndex({ email: 1 })

// text indexing
// db.massive.createIndex({ about: 'text' })

db.massive.find({ $text: { $search: "dolor" } })