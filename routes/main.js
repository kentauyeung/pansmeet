const express = require('express')
const router = express.Router()
const homeController = require('../controllers/main')
const {ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureGuest, homeController.getIndex) 

module.exports = router