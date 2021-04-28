const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const passport = require('passport');
// const session = require('express-session');
const connectDB = require('./config/database')

require('dotenv').config({ path: "./config/.env" });

connectDB()

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.PORT || PORT, () => {
    console.log('....Server running');
})