//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App({
  onLaunch: function () {
    qcloud.setLoginUrl(config.service.loginUrl)
  },

  globalData: {
    txMapKey: "4HYBZ-EB23D-SLC42-HQ5R3-LP3LQ-OZFU5"
  }
})