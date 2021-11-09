// index.js

/**
 * Required External Modules
 */
const express = require('express');
const path = require('path');
/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || '8000';

/**
 *  App Configuration
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
/**
 * Routes Definitions
 */
app.get('/', (request, response) => {
    response.render('index', {title:'Home'});
});
app.get('/user', (request, response) => {
    response.render('user', {title: 'Profile', userProfile: { nickname: "Auth0" } });
})
/**
 * Server Activation
 */
app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});