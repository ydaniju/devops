require('dotenv').config();

var heroin = require('heroin-js');

var configurator = heroin(process.env.HEROKU_API_TOKEN);

configurator({name: 'pruner'});
