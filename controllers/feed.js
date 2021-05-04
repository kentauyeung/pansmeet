const Post = require('../models/Post')
const cloudinary = require("../utils/cloudinary");


module.exports = {
    getFeeds: async (req, res) =>{
        
        try {
            const posts = await Post.find({}).populate('user').sort({createdAt: 'desc'})
            //console.log("req.user",req.user)
            res.render('feed', {posts:posts, user:req.user})
            // res.render('feed',{posts})
            
        } catch (err) {
            console.log(err)
            res.end('failed to get feed')
        }
    },
    createPost:async (req, res) => {
        console.log("file", req.file)
        console.log('body',req.body)
        try {
            const imageResult = await cloudinary.uploader.upload(req.file.path)
            req.body.user = req.user.id
            req.body.microsoftId = req.user.microsoftId
            req.body.comment = []
            console.log(imageResult)
            req.body.postPicUrl = imageResult.secure_url
            req.body.cloudinary_id = imageResult.public_id
            await Post.create(req.body)    
            res.redirect('/feed')
        } catch (err) {
            console.log(err)
            res.end('failed to create post')
        }
    },
    deletePost: async (req, res) =>{
        try {
            const storyId = req.params.storyId
            const cloudinaryId = req.body.cloudinaryId
            console.log(storyId)
            console.log(cloudinaryId)
            let post = await Post.findByIdAndDelete(storyId)
            if(cloudinaryId){
                await cloudinary.uploader.destroy(cloudinaryId)}
                
            res.json(post)
        } catch (err) {
            console.log(err)
        }
    }
}