const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");

mongoose.plugin(slug); // đăng ký plugin mới

const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, required: true },
  description: { type: String, default: "" },
  image: { type: String, default: "" },
  videoId: { type: String, default: "" },
  level: { type: String, default: "" },
  slug: { type: String, slug: "name", unique: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Course", Course);
