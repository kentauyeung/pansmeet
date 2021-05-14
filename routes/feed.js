const express = require('express')
const router = express.Router()
const feedController = require('../controllers/feed') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')
const upload = require("../utils/multer");

router.post('/createPost', ensureAuth, upload.single("image"), feedController.createPost)

router.get('/', ensureAuth, feedController.getFeeds)

router.get('/edit/:postID', ensureAuth, feedController.showEdit)

router.put('/edit/:postID', ensureAuth, feedController.revisePost)

router.delete('/:storyId/:cloudinaryId', ensureAuth, feedController.deletePost)


module.exports = router