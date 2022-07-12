const mongoose = require('mongoose');
const cloudinary = require('cloudinary');
const dotenv = require('dotenv');
dotenv.config({path: __dirname + '/.env'});

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://James182:7FjUBMhra!ck8%407@cluster0.7lth2.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

module.exports = mongoose.connection;