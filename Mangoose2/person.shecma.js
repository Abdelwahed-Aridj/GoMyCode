const Schema = mongoose.Schema;

const PersonSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  favoriteFoods: {
    type: Array,
    of: String,
  },
});

const Person = mongoose.model('Person', PersonSchema);
