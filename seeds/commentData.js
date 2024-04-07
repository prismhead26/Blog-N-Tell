// require associated model
const { Comment } = require("../models");

const commentData = [
    {
        description: "I agree!",
        user_id: 1,
        blog_id: 1,
    },
    {
        description: "Very cool",
        user_id: 2,
        blog_id: 2,
    },
    {
        description: "That is interesting to say the least.",
        user_id: 3,
        blog_id: 3,
    },
  ];
  
  const seedUser = () =>
    Comment.bulkCreate(commentData, { individualHooks: true });
  module.exports = seedUser;