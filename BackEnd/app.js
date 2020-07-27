

// dependencies 

const express = require('express');
var cors = require('cors');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

// Routes requirement 

const signinRoute = require('./routes/SignIn');
const signupRoute = require('./routes/SignUp');
// *****************************************
/* *********** */
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended : false })) ;
app.use(bodyParser.json());

// Routes 
app.use('/signin', signinRoute);
app.use('/signup',signupRoute);

// Error handling 

app.use(( req , res ,next) =>
{
    const error = new Error('Page not found');
    error.status = 404 ; 
    next(error);
});

app.use((error,req,res,next)=> 
{
    res.status(error.status || 500); 
    console.log("the error",error);
    res.json({
        error : error
    });
});

module.exports = app ; 
