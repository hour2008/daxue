// pages/query/query.js
var app = getApp();
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fkItems: util.fkItems,
    sfItems: util.sfItems,
    xlccItems: util.xlccItems,
    xxtsItems: util.xxtsItems,
    yxlxItems: util.yxlxItems,
    kssfIndex: 0,
    dxsfIndex: 0,
    xlccIndex: 0,
    xxtsIndex: 0,
    yxlxIndex: 0
  },

  onLoad: function (options) {
    this.getLocation();
  },

  //定位当前省份
  getLocation: function () {
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        //当前的经度和纬度
        let latitude = res.latitude
        let longitude = res.longitude
        wx.request({
          url: `https://apis.map.qq.com/ws/geocoder/v1/?location=${latitude},${longitude}&key=${app.globalData.txMapKey}`,
          success: res => {
            console.log(res);
            that.setData({
              kssfIndex : res.data.result.address_component.province
            });
          }
        })
      }
    })
  },

  bindKssfChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      kssfIndex: e.detail.value
    })
  },

  bindDxsfChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      dxsfIndex: e.detail.value
    })
  },

  bindXlccChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      xlccIndex: e.detail.value
    })
  },

  bindXxtsChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      xxtsIndex: e.detail.value
    })
  },

  bindYxlxChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      yxlxIndex: e.detail.value
    })
  }
})