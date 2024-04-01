// require associated model
const { Blog } = require("../models");

const blogData = [
  {
    title: "Why Code",
    body: "Why code?!?! Coding is awesome.",
  },
  {
    title: "OOP",
    body: "Obejct oriented programming core priciples are encapsulation, polymorphism, inheritance, and abstraction.",
  },
  {
    title: "mvc",
    body: "Model View Controller",
  },
];

const seedBlog = () => Blog.bulkCreate(blogData);
module.exports = seedBlog;
