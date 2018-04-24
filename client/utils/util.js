const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


// 显示繁忙提示
var showBusy = text => wx.showToast({
    title: text,
    icon: 'loading',
    duration: 10000
})

// 显示成功提示
var showSuccess = text => wx.showToast({
    title: text,
    icon: 'success'
})

// 显示失败提示
var showModel = (title, content) => {
    wx.hideToast();

    wx.showModal({
        title,
        content: JSON.stringify(content),
        showCancel: false
    })
}

const fkItems = [
  { name: '0', value: '文科' },
  { name: '1', value: '理科', checked: 'true' }
]

const sfItems = [
  '不限', '北京', '天津', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '上海', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '重庆', '四川', '贵州', '云南', '西藏', '陕西', '甘肃']

const xlccItems = ['不限', '一本', '二本', '三本']

const xxtsItems = ['不限', '211院校', '985院校', '双一流', '全国重点', '省重点']

const yxlxItems = ['不限', '综合', '工科', '艺术', '医院', '政法', '民族', '财经', '师范', '军事', '林业', '体育', '语言']

module.exports = { formatTime, showBusy, showSuccess, showModel, fkItems, sfItems, xlccItems, xxtsItems, yxlxItems }
