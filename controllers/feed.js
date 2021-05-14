const Post = require('../models/Post')
const cloudinary = require("../utils/cloudinary");


module.exports = {
    getFeeds: async (req, res) =>{
        
        try {
            const posts = await Post.find({}).populate('user').sort({createdAt: 'desc'})
            //console.log("req.user",req.user)
            res.render('feed', {posts:posts, user:req.user, editPost:false})
            // res.render('feed',{posts})
            
        } catch (err) {
            console.log(err)
            res.end('failed to get feed')
        }
    },
    createPost:async (req, res) => {
        //console.log("file", req.file)
        //console.log('body',req.body)
        try {
            const imageResult = await cloudinary.uploader.upload(req.file.path)
            req.body.user = req.user.id
            req.body.microsoftId = req.user.microsoftId
            req.body.comment = []
            //console.log(imageResult)
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
            console.log(req)
            const cloudinaryId = req.params.cloudinaryId
            console.log(storyId)
            console.log(cloudinaryId)
            let post = await Post.findByIdAndDelete(storyId)
            if(cloudinaryId !== "NA"){
                await cloudinary.uploader.destroy(cloudinaryId)}
                
            console.log("Post deleted")
            res.redirect('/feed')
        } catch (err) {
            console.log(err)
        }
    },
    showEdit: async (req, res) => {
        try {
            const storyId = req.params.postID
            //console.log('showedit',storyId)
            if (storyId !== "main.js" ){
            const editPost = await Post.findByIdAndUpdate(storyId, {createdAt: new Date()})
            const posts = await Post.find({}).populate('user').sort({createdAt: 'desc'})
            res.render('feed',{posts:posts, user:req.user, editPost: editPost})
            }
        } catch (err) {
            console.log(err)
        }
    },
    revisePost: async (req, res) => {
        try {
            const storyId = req.params.postID
            //console.log('revise',storyId)

            if (storyId !== "main.js" ){
                const contentRevised = req.body.content
                await Post.updateOne({_id: storyId},{content: contentRevised})
                res.redirect('/feed')
            }
        } catch (err) {
            console.log(err)
        }
    },

}