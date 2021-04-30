const feed = require('../models/Post')

module.exports = {
    getFeeds: async (req,res)=>{
        console.log(req.user)
        try{
            // {user: req.user}
            res.render('header.ejs',{user: req.user})
        }catch(err){
            console.log(err)
        }
    }
 
}    

