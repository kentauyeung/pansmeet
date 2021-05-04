const mongoose = require('mongoose');

//this is the schema pattern you should used when developing collections in the
//mongoDB database
const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    microsoftId: {
        type: String,
        required: true,
      },
      displayName: {
        type: String,
        required: true,
    }, 
        bio: {
            type: String,
            required: true
        },
        profilePicUrl: {
            type: String,
            required: true
        },
      

});

module.exports = mongoose.model('User', UserSchema);

//collection in MongoDB would look like
//{"userName": "goth_brooks", 
     //"microsoftID": 123455678
    //"bio": "A queen",
    //displayName: "Nicole",
    //profilePicUrl: "https://res.cloudinary.com/teepublic/image/private/s--angK3seb--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,h_626/c_crop,g_north_west,h_626,w_470,x_-16,y_0/g_north_west,u_upload:v1462829024:production:blanks:a59x1cgomgu5lprfjlmi,x_-411,y_-325/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1543307806/production/designs/3588698_0.jpg"
  
// }