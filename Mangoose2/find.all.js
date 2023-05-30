// Find all people with the name "John Doe"
const people = Person.find({ name: 'John Doe' }, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log('People found successfully!');
    console.log(data);
  }
});