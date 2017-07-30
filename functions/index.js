// Load zone.js for the server.
const functions = require('firebase-functions');
const express = require('express');
require('zone.js/dist/zone-node');
const path = require('path')




// Import renderModuleFactory from @angular/platform-server.
const renderModuleFactory = require('@angular/platform-server').renderModuleFactory;

// Import the AOT compiled factory for your AppServerModule.
// This import will change with the hash of your built server bundle.
const AppServerModuleNgFactory = require('./dist-server/main.61c8194551162576f43c.bundle').AppServerModuleNgFactory;

// Load the index.html file.
const index = require('fs').readFileSync(path.resolve(__dirname, './dist-server/index.html'), 'utf8');

// Render to HTML and log it to the console.


let app = express();

app.get('/', function(req, res) {
  renderModuleFactory(AppServerModuleNgFactory, {document: index, url: '/'})
      .then(function(html) {
         res.send(html);
      }).catch( function(e) {
         console.log(e)
      });
});

exports.ssr = functions.https.onRequest(app);
