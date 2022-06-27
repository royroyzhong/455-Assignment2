const mongoose = require("mongoose");

// create schema
const schema = new mongoose.Schema({
  name: String,
  ingredients: String,
  instructions: String,
  lastModifieddate: { type: Date, default: Date.now },
});

// schema.methods.speak = function speak() {
//   console.log(`I'm a talking sandwich named ${this.name}`);
// };

// create model
const item = mongoose.model("item", schema);

module.exports = item;
