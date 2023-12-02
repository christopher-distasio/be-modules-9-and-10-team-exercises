//Module 10, Lesson 1


// Code for adding a post hook in Mongoose
breadsSchema.post('findOneAndDelete', async (doc) => {
  if (doc) {
    // -- MISSING CODE --
    // Add logic here to handle cascading deletion of related breads
    // when a baker is deleted using 'findOneAndDelete'.
  }
});

// Discussion Questions:
// 1. What is the purpose of the post hook in this code?
// 2. How does it intend to handle cascading deletion of related breads when a baker is deleted using 'findOneAndDelete'?
