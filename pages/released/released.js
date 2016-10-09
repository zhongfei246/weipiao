var api = require("../../utils/api.js");
var order = ['red', 'yellow', 'blue', 'green', 'red'];

Page({
  data:{
    // text:"这是一个页面"
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1200,
    bannerList:[],
    listData:[]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var $this = this;
    //banner图
    api.getData('bannerList')
    .then(res=>{
        $this.setData({
            bannerList:res
        })
    })
    //列表数据
    api.getData('playingList')
    .then(res=>{
      $this.setData({
        listData:res
      })
    })
  },
  upper: function(e) {
    console.log(e)
  },
  lower: function(e) {
    console.log(e)
  },
  scroll: function(e) {
    console.log(e)
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})

