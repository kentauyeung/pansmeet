const mongoose = require('mongoose');

//this is the schema pattern you should used when developing collections in the
//mongoDB database
const UserSchema = new mongoose.Schema({
    microsoftId: {
        type: String,
        required: true,
      },
      displayName: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('User', UserSchema);

//collection in MongoDB would look like
//{"username": "goth_brooks", 
    //"firstName": "Nicole", 
    //"lastName": "Gathany", 
    //"bio": "A queen",
    //"microsoftID": 123455678
// }