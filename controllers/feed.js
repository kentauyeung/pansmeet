const Post = require('../models/UserPost')

module.exports = {
    getFeeds: (req, res) =>{
        res.render('feed')
    }
}