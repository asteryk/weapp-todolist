//main.js
Page({
  data: {
    todolist:wx.getStorageSync('TODO') || [],
    inputVal:''
  },
  bindKeyInput:function(event){
    this.setData({
      inputVal:event.detail.value
    })
  },
  handleTap:function(){
    var length = this.data.todolist.length;
    this.data.todolist.push({
      id:length+1,
      status:0,//will do
      value:this.data.inputVal
    });
    wx.setStorage({
      key:"TODO",
      data:this.data.todolist
    });
    this.setData({
      inputVal:''
    });
    console.log(this.data.todolist);
  }
})