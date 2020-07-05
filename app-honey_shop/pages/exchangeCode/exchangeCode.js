// pages/exchangeCode/exchangeCode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 提示框显示与否
    showOneButtonDialog:false,
    oneButton: [{text: '确定'}],
    returnMessage:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 点击扫一扫图标，调用微信api
  getScancode: function() {
    var _this = this;
    // 允许从相机和相册扫码
    wx.scanCode({
      success: (res) => {
        var result = res.result;
        _this.setData({
          showOneButtonDialog: true,
          returnMessage: result
        })
      }
    })
 
  },
  tapDialogButton(e) {
    this.setData({
        showOneButtonDialog: false
    })
},
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})