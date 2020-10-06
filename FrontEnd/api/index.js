const express = require('express');
const env = require('dotenv').config();
const next = require('next');
const bodyParser = require('body-parser');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const handle = nextApp.getRequestHandler();
// mongodb Config
var mongoose = require('mongoose');
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

// ----------------------------
// Routes requirement 
const signinRoute = require('./routes/SignIn');
const signupRoute = require('./routes/SignUp');
const allProfiles = require('./routes/Profiles');
const temoignagesRoute = require('./routes/Temoignages');
const signoutRoute = require('./routes/SignOut');

// ------------------------------

nextApp.prepare().then(() => {
    const app = express();
    app.use(bodyParser.urlencoded({extended : true}));
    app.use(bodyParser.json());

    // Routes 
    app.use('/api/signin', signinRoute);
    app.use('/api/signup',signupRoute);
    app.use('/api/signout',signoutRoute);
    app.use('/api/profiles', allProfiles);
    app.use('/api/temoin',temoignagesRoute);

    app.all('*', (req, res) => {
      return handle(req, res)
    })
    app.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })