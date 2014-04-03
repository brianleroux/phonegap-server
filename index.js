#!/usr/bin/env node
var phonegap = require('connect-phonegap')
  , connect  = require('connect')
  , app      = connect()
  , colors   = require('colors')
  , log      = console.log


log('´¯`·.¸¸.·´¯`·.¸´¯`·.¸¸.·´¯`·.¸´¯`·'.rainbow)
log('Listening on ' + 'http://localhost:3000'.green)
log('´¯`·.¸¸.·´¯`·.¸´¯`·.¸¸.·´¯`·.¸´¯`·'.rainbow)
log('Hit '.grey + 'ctrl+c'.bold + ' to exit'.grey) 
log('Or '.grey + 'ctrl+z'.bold + ' and '.grey + 'bg'.bold + ' to background and '.grey + 'fg'.bold + ' to bring the beat back'.grey)
log("")

var count = 0
app.use(function(req, res, next) {
    console.log(++count)
})
app.use(phonegap())
app.listen(3000)
