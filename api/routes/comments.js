const router = require('express').Router();
const commentController = require('../controllers/commentController');

router.post('/comment',commentController.create);
router.get('/comment',commentController.index);

module.exports = router;