const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const blogRoutes = require('./blogRoutes');

// Prefix all routes defined in `userRoutes.js` with `/users
router.use('/users', userRoutes);
// Prefix all routes defined in `commentRoutes.js` with `/comments
router.use('/comments', commentRoutes);
// Prefix all routes defined in `blogRoutes.js` with `/blogs
router.use('/blogs', blogRoutes);

module.exports = router;