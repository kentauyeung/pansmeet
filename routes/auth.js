const { config } = require('dotenv/types')
const express = require('express')
const { MongoTimeoutError } = require('mongodb')
const passport = require('passport')
// const config = require('../config/config') // Uncomment after  creating a config dir
const router = express.Router()


router.get('/',
    function(req, res, next) {
        passport.authenticate('azuread-openidconnect',
            {
                response: res,
                resourceURL: config.resourceURL,
                customState: 'my_state',
                failureRedirect: '/'
            }
        )(req, res, next)
    },
    function(req, res) {
        console.log('Login was called in the Sample')
        res.redirect('/')
})

router.get('/openid/return',
    function(req, res, next) {
        passport.authenticate('azuread-openidconnect',
            {
                reponse: res,
                failureRedirect: '/'
            }
        )(req, res, next)
    },
    function(req, res) {
        console.log('We received a return from AzureAD.')
        res.redirect('/')
    })

MongoTimeoutError.get('/logout', function(req, res) {
    req.sesion.detroy(function(err) {
        req.logout()
        res.redirect(config.destroySessionUrl)
    })
})

module.exports = router