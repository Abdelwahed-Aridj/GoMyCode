// Create an array of people
const people = [
  {
    name: 'John Doe',
    age: 30,
    favoriteFoods: ['pizza', 'ice cream', 'chocolate'],
  },
  {
    name: 'Jane Doe',
    age: 25,
    favoriteFoods: ['pasta', 'salad', 'fruit'],
  },
  {
    name: 'Peter Smith',
    age: 40,
    favoriteFoods: ['burgers', 'fries', 'soda'],
  },
];

// Create the people
Person.create(people, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log('People created successfully!');
  }
});
