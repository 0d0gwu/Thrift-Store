const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const StoreUser = require('./models/Users.js');
const productReview = '/product/:id' ;
const bodyParser = require('body-parser');
const { OAuth2Client } = require('google-auth-library');
const client_id= "1044282491612-ijgs1rdqg7rvmq7ct2alrssg9t6h4kp9.apps.googleusercontent.com";
const client = new OAuth2Client(client_id);

//controller imports
const homePageController = require('./controller/home');
const aboutPageController = require('./controller/about');
const productPageController = require('./controller/product');
const productReviewController = require('./controller/productReview');
const registerPageController = require('./controller/registerPage.js');
const authenticateUsers = require('./controller/auth.js');

//Implementing Session via express-session middleware
const expressSession = require('express-session');


app.use(expressSession({
    secret: 'cat'
}))

mongoose.connect('mongodb://localhost/store_database');


//create body parsing middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', homePageController)

app.get('/product', productPageController);

app.get('/about', aboutPageController);

app.get('/auth', registerPageController);

//create google authentication  - redirect to google for auth

app.get('/auth/google', async(req, res)=>{
    const redirectUri = "http://localhost:3000/"
    const url = client.generateAuthUrl({
        access_type:'offline',
        scope: ['email'],
        redirect_uri: redirectUri,
    });
    res.redirect(url);
})

//callback route for google to redirect to



app.post('/users/auth', authenticateUsers);


app.get(productReview, productReviewController)


app.listen(3000, ()=> {
    console.log('App is running on Port 3000')
});
