#!/usr/bin/env node
var pgc = require('connect-phonegap')
  , colors = require('colors')
  , log = console.log

pgc.listen()
  .on('complete', function(data) {
    log('´¯`·.¸¸.·´¯`·.¸´¯`·.¸¸.·´¯`·.¸´¯`·'.rainbow)
    log('Listening on ' + 'http://ADDRESS:PORT'.replace('ADDRESS', data.address).replace('PORT', data.port).green)
    log('´¯`·.¸¸.·´¯`·.¸´¯`·.¸¸.·´¯`·.¸´¯`·'.rainbow)
    log('Hit '.grey + 'ctrl+c'.bold + ' to exit'.grey)
    log('Or '.grey + 'ctrl+z'.bold + ' and '.grey + 'bg'.bold + ' to background and '.grey + 'fg'.bold + ' to bring the beat back'.grey)
    log('')
  })
  .on('error', function(e) {
    log('Error', e.message.red)
    process.exit();
  })
  .on('request', function(req, res) {
    log('[' + colors.green(res.statusCode) + ']', req.url)
  });
