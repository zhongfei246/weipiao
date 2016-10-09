var api = require("../../utils/api.js");
Page({
  data:{
    // text:"这是一个页面"
    cinemaList:[]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var $this = this;
     api.getData('cinemaList')
    .then(res=>{
        $this.setData({
            cinemaList:res
        })
    })
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