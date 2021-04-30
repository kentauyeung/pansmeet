const express = require('express')
const router = express.Router()
const feedController = require('../controllers/feed')

router.get('/', feedController.getFeeds)

//router.post('/createPost', feedController.createPost)

module.exports = router