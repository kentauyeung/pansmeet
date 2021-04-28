const mongoose = require('mongoose')


const connectDB = async () => {
    try {
        const connectToDB = await mongoose.connect(process.env.DB_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        })
        console.log(`Your Mongo Data base is conected ${connectToDB.connection.host}`)
    } catch (err) {
        console.log(`you got an error ${err}`)
        process.exit(1)
    }
}

module.exports = connectDB