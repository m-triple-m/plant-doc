const {Schema,model} = require('../connection');
const mongoose = require("mongoose")
const myschema = new  mongoose.Schema({
    name: String,
    email : String,
    password : String,
    avatar: {type: String, default: 'user-placeholder.jpg'},
    role : { type: String, default: 'user' },
    createdAt : Date
});

module.exports = mongoose.model('users', myschema);
