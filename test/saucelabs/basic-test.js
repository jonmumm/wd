// Generated by CoffeeScript 1.3.2
(function() {
  var chromeDesired, configHelper, explorerDesired, firefoxDesired, nameBase, remoteWdConfig, runTestWith;

  runTestWith = require('../common/basic-test-base').runTestWith;

  configHelper = require('./config-helper');

  remoteWdConfig = configHelper.getRemoteWdConfig();

  nameBase = "saucelabs basic test - ";

  chromeDesired = {
    name: nameBase + 'chrome',
    browserName: 'chrome'
  };

  firefoxDesired = {
    name: nameBase + 'firefox',
    browserName: 'firefox'
  };

  explorerDesired = {
    name: nameBase + 'explorer',
    browserName: 'iexplore',
    version: '9',
    platform: 'Windows 2008'
  };

  exports.wd = {
    chrome: runTestWith(remoteWdConfig, chromeDesired),
    firefox: runTestWith(remoteWdConfig, firefoxDesired),
    explorer: runTestWith(remoteWdConfig, explorerDesired)
  };

}).call(this);
