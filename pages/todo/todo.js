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
    var that = this;
    var length = this.data.todolist.length;
    var todolist = this.data.todolist;
    todolist.push({
      id:(new Date()).valueOf(),
      status:0,//will do
      value:this.data.inputVal
    });
    wx.setStorage({
      key:"TODO",
      data:this.data.todolist,
      success: function() {
        that.setData({
          todolist:that.data.todolist,
          inputVal:''
        });
      },
      fail:function(res){
        console.log(res);
      }
    });
    console.log(this.data.todolist);
  },
  alreadyDo:function(event){
    var that = this;
    var chooseId = Number(event.currentTarget.dataset.id);
    var todolist = this.data.todolist;
    todolist.forEach(function(item){
      if(item.id === chooseId){
        item.status = Number(1 - item.status);
      }
    });
    wx.setStorage({
      key:"TODO",
      data:this.data.todolist,
      success: function() {
        that.setData({
          todolist:that.data.todolist,
        });
      },
      fail:function(res){
        console.log(res);
      }
    });
    console.log(this.data.todolist);
  },
  delDo:function(event){
    var that = this;
    var chooseId = Number(event.currentTarget.dataset.delid);
    var todolist = this.data.todolist;
    todolist.forEach(function(item,index){
      if(item.id === chooseId){
        todolist.splice(index,1);
      }
    });
    wx.setStorage({
      key:"TODO",
      data:this.data.todolist,
      success: function() {
        that.setData({
          todolist:that.data.todolist,
        });
      },
      fail:function(res){
        console.log(res);
      }
    });
  }
})