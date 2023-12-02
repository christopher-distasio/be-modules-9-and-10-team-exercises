// Code for optimizing Mongoose queries
const baker = await Baker.findOne({ name: 'John Doe' });
// -- MISSING CODE --
// Add code here to apply the 'lean' method to the 'baker' document.

const limitedBreads = await Bread.find().limit(10);
// -- MISSING CODE --
// Add code here to apply the 'lean' method and query option 'limit' to 'limitedBreads'.

// Discussion Questions:
// 1. How does using the 'lean' method improve query optimization in Mongoose?
// 2. In what scenarios might you apply the 'limit' query option and the 'lean' method to your Mongoose queries?

