const router = require('express').Router();
const apiRoutes = require('./api');
const exerciseRoutes = require('./exercise');
const statsRoutes = require('./stats');
const homeRoutes = require('./home');

router.use('/api', apiRoutes);
router.use('/stats', statsRoutes);
router.use('/exercise', exerciseRoutes);
router.use('/', homeRoutes);

module.exports = router;