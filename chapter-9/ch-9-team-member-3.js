// Module 9, Lesson 3

// Code for adding a virtual field to the Baker model
const bakerSchema = new Schema({
  // ... other fields
})

// Define a virtual to get all the baker's related breads
bakerSchema.virtual('breads', {
  ref: 'Bread',
  localField: '_id',
  foreignField: 'baker',
})

// Discussion Question:
// What's the purpose of the 'breads' virtual field, and how is it set up here?
