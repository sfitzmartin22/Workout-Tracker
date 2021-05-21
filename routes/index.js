const router = require('express').Router();
const apiRoutes = require('./api');
const exerciseRoutes = require('./exercise');
const statsRoutes = require('./stats');

router.use('/api', apiRoutes);
router.use('/stats', statsRoutes);
router.use('/exercise', exerciseRoutes);

module.exports = router;