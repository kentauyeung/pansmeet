const express = require('express')
const router = express.Router()
const feedController = require('../controllers/feed') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')
const upload = require("../utils/multer");

router.get('/edit/:postID', ensureAuth, feedController.showEdit)

router.get('/', ensureAuth, feedController.getFeeds)

router.post('/createPost', ensureAuth, upload.single("image"), feedController.createPost)

router.delete('/:storyId/:cloudinaryId', ensureAuth, feedController.deletePost)


module.exports = router