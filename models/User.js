const mongoose = require('mongoose');

//this is the schema pattern you should used when developing collections in the
//mongoDB database
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    bio: { type: String, required: false },
    microsoftId: { type: String, required: true }

});

module.exports = mongoose.model('User', userSchema);

//collection in MongoDB would look like
//{"username": "goth_brooks", 
    //"firstName": "Nicole", 
    //"lastName": "Gathany", 
    //"bio": "A queen",
    //"microsoftID": 123455678
// }