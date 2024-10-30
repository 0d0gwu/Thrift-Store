const mongoose = require('mongoose');

const StoreUser = require('./model/StoreUser');

mongoose.connect('mongodb://localhost/Newstore_database');

StoreUser.create({
    username: 'sanitizeFilter',
    password:'Temi'
}, 

(error, StoreUser)=>{
    console.log(error, StoreUser);
});