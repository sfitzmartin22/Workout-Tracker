const router = require('express').Router();
const apiRoutes = require('./api');
const excerciceRoutes = require('./excercise');
const statsRoutes = require('./stats');

router.use('/api', apiRoutes);
router.use('/stats', statsRoutes);
router.use('/excercise', excerciceRoutes);

module.exports = router;