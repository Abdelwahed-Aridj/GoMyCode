const mongoose = require('mongoose');
const Person = require('./personModel');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const newPerson = new Person({
  name: 'John Doe',
  age: 25,
  favoriteFoods: ['Pizza', 'Burger'],
});

newPerson.save((error, savedPerson) => {
  if (error) {
    console.error(error);
  } else {
    console.log('New person created:', savedPerson);
  }
});
