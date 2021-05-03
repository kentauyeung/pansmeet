const express = require('express')
const router = express.Router()
const feedController = require('../controllers/feed') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/',ensureAuth, feedController.getFeeds)

router.post('/createPost', ensureAuth, feedController.createPost)

module.exports = router