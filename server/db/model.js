const mongoose = require("mongoose");

// create schema
const schema = new mongoose.Schema({
  name: String,
  ingredients: String,
  instructions: String,
  lastModifieddate: { type: Date, default: Date.now },
  like: { type: Number, default: 0 },
});

// schema.methods.speak = function speak() {
//   console.log(`I'm a talking sandwich named ${this.name}`);
// };

// create model
const recipe = mongoose.model("recipe", schema);

module.exports = recipe;
