const User = require("./User");
const Blog = require("./Blog");
const Comment = require("./Comment");

//User has many blogs
User.hasMany(Blog, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

//b=Blog belong to one User
Blog.belongsTo(User, {
  foreignKey: "user_id",
});

//User has many appointments
User.hasMany(Comment, {
  foreignKey: "user_id",
});

//Appointment belongs to one User
Comment.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Blog, Comment };
