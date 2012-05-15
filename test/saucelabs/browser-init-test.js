// Generated by CoffeeScript 1.3.2
(function() {
  var configHelper, remoteWdConfig, should, wd;

  wd = require('../../lib/main');

  should = require('should');

  configHelper = require('./config-helper');

  remoteWdConfig = configHelper.getRemoteWdConfig();

  exports.wd = {
    'browser init test': {
      "default": function(test) {
        var browser;
        browser = wd.remote(remoteWdConfig);
        browser.defaultCapabilities.should.eql({
          browserName: 'firefox',
          version: '',
          javascriptEnabled: true,
          platform: 'VISTA'
        });
        return browser.init(function(err) {
          should.not.exist(err);
          return browser.sessionCapabilities(function(err, capabilities) {
            should.not.exist(err);
            capabilities.browserName.should.equal('firefox');
            return browser.quit(function(err) {
              should.not.exist(err);
              return test.done();
            });
          });
        });
      },
      'using browser.defaultCapabilities': function(test) {
        var browser;
        browser = wd.remote(remoteWdConfig);
        browser.defaultCapabilities.browserName = 'chrome';
        browser.defaultCapabilities.platform = 'LINUX';
        browser.defaultCapabilities.javascriptEnabled = false;
        browser.defaultCapabilities.name = 'browser init using defaultCapabilities';
        browser.defaultCapabilities.tags = ['wd', 'test'];
        browser.defaultCapabilities.should.eql({
          browserName: 'chrome',
          version: '',
          javascriptEnabled: false,
          platform: 'LINUX',
          name: 'browser init using defaultCapabilities',
          tags: ['wd', 'test']
        });
        return browser.init(function(err) {
          should.not.exist(err);
          return browser.sessionCapabilities(function(err, capabilities) {
            should.not.exist(err);
            capabilities.browserName.should.equal('chrome');
            capabilities.platform.should.equal('LINUX');
            return browser.quit(function(err) {
              should.not.exist(err);
              return test.done();
            });
          });
        });
      },
      'desired only': function(test) {
        var browser, desired;
        browser = wd.remote(remoteWdConfig);
        browser.defaultCapabilities.should.eql({
          browserName: 'firefox',
          version: '',
          javascriptEnabled: true,
          platform: 'VISTA'
        });
        desired = {
          browserName: 'iexplore',
          platform: 'Windows 2008',
          name: 'browser init using desired',
          tags: ['wd', 'test']
        };
        return browser.init(desired, function(err) {
          should.not.exist(err);
          return browser.sessionCapabilities(function(err, capabilities) {
            should.not.exist(err);
            capabilities.browserName.should.include('explorer');
            capabilities.platform.should.equal('WINDOWS');
            return browser.quit(function(err) {
              should.not.exist(err);
              return test.done();
            });
          });
        });
      },
      'desired overiding defaultCapabilities': function(test) {
        var browser;
        browser = wd.remote(remoteWdConfig);
        browser.defaultCapabilities.browserName = 'chrome';
        browser.defaultCapabilities.name = 'browser init overide';
        browser.defaultCapabilities.tags = ['wd', 'test'];
        browser.defaultCapabilities.should.eql({
          browserName: 'chrome',
          version: '',
          javascriptEnabled: true,
          platform: 'VISTA',
          name: 'browser init overide',
          tags: ['wd', 'test']
        });
        return browser.init({
          browserName: 'firefox'
        }, function(err) {
          should.not.exist(err);
          return browser.sessionCapabilities(function(err, capabilities) {
            should.not.exist(err);
            capabilities.browserName.should.equal('firefox');
            return browser.quit(function(err) {
              should.not.exist(err);
              return test.done();
            });
          });
        });
      }
    }
  };

}).call(this);
