// Code for optimizing Mongoose queries with different examples
const baker = await Baker.findOne({ profession: 'Baker' })______
// -- MISSING CODE --
// Add code here to apply the 'lean' method to the 'baker' document.

const popularBreads = await Bread.find({ popularity: { $gte: 5 } })______;
// -- MISSING CODE --
// Add code here to apply the 'lean' method to 'popularBreads'.

// Discussion Questions:
// 1. How does using the 'lean' method improve query optimization in Mongoose?

// 2. In what scenarios might you apply the 'limit' query option and the 'lean' method to your Mongoose queries?
// Answer: You might apply the 'lean' method when you want to retrieve plain objects to optimize query performance. The 'limit' query option is applied when you need to restrict the number of documents returned by a query.
