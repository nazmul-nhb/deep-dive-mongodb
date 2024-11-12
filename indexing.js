// db.test.find({"_id" : ObjectId("6406ad63fc13ae5a40000066")}).explain("executionStats")
// db.test.find({"email" : "omirfin2@i2i.jp"}).explain("executionStats")

db.getCollection("massive").createIndex({ email: 1 })