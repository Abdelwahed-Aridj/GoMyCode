// Create a new Person document
const person = new Person({
  name: 'John Doe',
  age: 30,
  favoriteFoods: ['pizza', 'ice cream', 'chocolate'],
});

// Save the document
person.save((err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Document saved successfully!');
  }
});