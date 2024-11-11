db.test.aggregate([
    // Stage #1
    { $match: { gender: "Male" } },
    // Stage #2 => $addFields does not modify origibal doc in the db
    { $addFields: { course: "Hakuna Matata" } },
    // Stage #3
    { $project: { course: 1 } },
    // Stage #4 => $out creates new collection from the result of aggregation so far.
    // $out can only be used as the last stage of the pipeline
    // { $out: "courses" },
    // Stage #4 => $merge merges the output with the docs in the existing collection
    { $merge: "test" }
])
