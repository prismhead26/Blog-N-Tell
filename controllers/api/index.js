const router = require('express').Router();
const userRoutes = require('./userRoutes');
const appointmentRoutes = require('./appointmentRoutes');
const blogRoutes = require('./blogRoutes');

router.use('/users', userRoutes);
// router.use('/appointments', appointmentRoutes);
router.use('/blogs', blogRoutes);

module.exports = router;