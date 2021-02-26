function wxShare(
  shareTitle,
  shareInfo,
  shareImg,
  shareLink = window.location.href,
) {
  // 'CSGO白给狂欢节开启'
  // '典藏白给手册，六一国服开启限时活动，海量豪礼打造CSer专属节日'
  // 'https://img.dota2.com.cn/file/3c/77/3c77101f2b36da0f0a4d455fafac1db11590656227.jpg'
  wx.ready(function() {
    //分享给朋友
    wx.onMenuShareAppMessage({
      title: shareTitle,
      desc: shareInfo,
      link: shareLink, // window.location.href,
      imgUrl: shareImg,
      trigger: function(res) {
        // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
        //alert('用户点击发送给朋友');
      },
      success: function(res) {},
      cancel: function(res) {
        //alert('已取消');
      },
      fail: function(res) {
        alert(JSON.stringify(res))
      },
    })
    //分享到朋友圈
    wx.onMenuShareTimeline({
      title: shareTitle,
      link: shareLink, //window.location.href,
      imgUrl: shareImg,
      trigger: function(res) {
        // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
        //alert('用户点击分享到朋友圈');
      },
      success: function(res) {},
      cancel: function(res) {
        //alert('已取消');
      },
      fail: function(res) {
        alert(JSON.stringify(res))
      },
    })
    //分享到QQ
    wx.onMenuShareQQ({
      title: shareTitle, // 分享标题
      desc: shareInfo, // 分享描述
      link: shareLink, // location.href, // 分享链接
      imgUrl: shareImg, // 分享图标
      success: function() {
        // 用户确认分享后执行的回调函数
      },
      cancel: function() {
        // 用户取消分享后执行的回调函数
      },
    })
  })
}

wxShare(
  'PWL完美世界DOTA2职业联赛开战！',
  '10支队伍分为A、B两级赛事争夺总计20万美金的赛事奖金。',
  'https://img.dota2.com.cn/file/25/17/25176591cf857e7e9218b21eba250d5f1602499078.png',
)
