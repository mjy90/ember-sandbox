'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    // Add options here
  });

  // if (app.env === 'test') {
  //   app.import('bower_components/ember/ember-template-compiler.js', { type: 'test' });
  // }

  return app.toTree();
};
