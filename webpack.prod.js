const config = require('./webpack.config.js');
config.mode = 'production';
config.output.filename = 'formio-custom-templates.min.js';
module.exports = config;
