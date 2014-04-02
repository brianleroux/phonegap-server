#!/usr/bin/env node
var pgc = require('connect-phonegap')
  , colors = require('colors')
  , log = console.log

log('´¯`·.¸¸.·´¯`·.¸´¯`·.¸¸.·´¯`·.¸´¯`·'.rainbow)
log('Listening on ' + 'http://localhost:3000'.green)
log('´¯`·.¸¸.·´¯`·.¸´¯`·.¸¸.·´¯`·.¸´¯`·'.rainbow)
log('Hit '.grey + 'ctrl+c'.bold + ' to exit'.grey) 
log('Or '.grey + 'ctrl+z'.bold + ' and '.grey + 'bg'.bold + ' to background and '.grey + 'fg'.bold + ' to bring the beat back'.grey)
log("")
pgc.listen()
