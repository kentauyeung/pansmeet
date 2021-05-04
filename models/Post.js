
const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    // title: {
    //     type: String,
    //     required: true,
    //     trim: true
    // },
    content: {
        type: String,
        required: true
    },
    microsoftId: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    comment: {
        type: Array
        //would be an array of objects
        //[{userName: "petty_parker", comment: "blah blah blah", createdAt: 12/31/2021},
        //  {userName: "90_Day_Beyonce", comment: "that's dope", createdAt: 1/1/2021}
        //]
    },
    postPicUrl: {
        type: String,
        required: true
    },
    cloudinary_id: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Post', PostSchema);
//MongoDB collections would look like this:
//{title: "I am posting something", content: "Content, Content, baby. Blah, blah!!", microsoftID: "123abD4321", createdAt}