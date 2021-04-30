const express = require('express');
const { Db } = require('mongodb'); 
// const MongoClient = require('mongodb').MongoClient
const app = express();
const mongoose = require('mongoose');
// const passport = require('passport');
// const session = require('express-session');
const connectDB = require('./config/database')

const homeRoute = require('./routes/main')
//const authRoute = require('./routes/auth')
//const profileRoute = require('./routes/profile')
//const feedRoute = require('./routes/feed')

require('dotenv').config({ path: "./config/.env" });

connectDB()

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Homepage
app.use('/', homeRoute)

// // Login auth
// app.use('/auth', authRoute)

// // User profile
// app.use('/profile', profileRoute)

// // User feed
// app.use('/feed', feedRoute)

// app.use('/createPost', (req, res) => {
//     Db.collection('userPost').insertOne( { title: req.body.title })
//     Db.collection('UserPost').insertOne( { comment: req.body.comment })
//     .then(result => {
//         console.log('Post has been added!')
//         // res.redirect('/')
//     })
// })

app.listen(process.env.PORT || PORT, () => {
    console.log('....Server running');
})