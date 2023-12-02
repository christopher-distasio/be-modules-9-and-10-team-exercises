// Code for optimizing Mongoose queries with different examples
const baker = await Baker.findOne({ profession: 'Baker' }).lean();
// Solution 1:
// Apply the 'lean' method to the 'baker' document.
// const baker = await Baker.findOne({ profession: 'Baker' }).lean();

const popularBreads = await Bread.find({ popularity: { $gte: 5 } }).lean();
// Solution 2:
// Apply the 'lean' method to 'popularBreads'.
// const popularBreads = await Bread.find({ popularity: { $gte: 5 } }).lean();

// Discussion Questions:
// 1. How does using the 'lean' method improve query optimization in Mongoose?
// Answer: Using the 'lean' method in Mongoose reduces the overhead of converting query results into full Mongoose documents, which can improve query performance by returning plain JavaScript objects instead.

// 2. In what scenarios might you apply the 'limit' query option and the 'lean' method to your Mongoose queries?
// Answer: You might apply the 'lean' method when you want to retrieve plain objects to optimize query performance. The 'limit' query option is applied when you need to restrict the number of documents returned by a query.
