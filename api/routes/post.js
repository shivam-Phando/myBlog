const router = require("express").Router();
const postController = require("../controllers/postController");
const auth = require('../middleware/verifyToken')

router.post("/create", postController.create);
router.get("/index",auth, postController.index);


module.exports = router;
