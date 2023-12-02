// Module 9, Lesson 1

// Code for querying and populating related documents
breads.get('/:id', (req, res) => {
  Bread.findById(req.params.id) 
  // -- MISSING CODE --
  .then(foundBread => {
  res.render('show', {
  bread: foundBread
  })
  })
  .catch(err => {
  res.send('404')
  })
 })

 //Directions: fill in the missing code.
 
 // Discussion Question:
 // What is the purpose of the 'findById' method and how does it relate to the 'req.params.id' parameter in this code?
 