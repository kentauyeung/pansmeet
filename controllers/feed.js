const Post = require('../models/Post')

module.exports = {
    getFeeds: async (req, res) =>{
        // console.log(req.user)
        try {
            const posts = await Post.find({}).populate('user').sort({createdAt: 'desc'})
            console.log(posts)
            res.render('feed', {posts:posts, user:req.user})
            // res.render('feed',{posts})
            
        } catch (err) {
            console.log(err)
            res.end('failed to get feed')
        }
    },
    createPost:async (req, res) => {
        
        req.body.user = req.user.id
        req.body.microsoftId = req.user.microsoftId
        req.body.comment = []
        try {
            await Post.create(req.body)    
            res.redirect('/feed')
        } catch (err) {
            console.log(err)
            res.end('failed to create post')
        }

    }
}