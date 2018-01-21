require('dotenv').config();

var heroin = require('heroin-js');

var configurator = heroin(process.env.HEROKU_API_TOKEN);

config = {
  name: 'pruner',
  buildpacks: [
    'https://github.com/heroku/heroku-buildpack-ruby',
    'https://github.com/heroku/heroku-buildpack-apt'
  ]
}

configurator(config);

configurator.export('pruner').then(function (result) {
  console.log(result);
});
