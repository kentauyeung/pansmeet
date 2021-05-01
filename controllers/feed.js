const Post = require('../models/Post')

module.exports = {
    getFeeds: (req, res) =>{
        res.render('feed')
    }
}