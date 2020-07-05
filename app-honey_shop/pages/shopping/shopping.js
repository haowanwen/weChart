// pages/shopping/shopping.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    cateItems:[
      {
        cate_id:1,
        cate_name:'奶油蛋糕',
        children: [
          { 
            child_id: 1, 
            name: '奶油蛋糕1', 
            image: "http://49.234.78.37/appHoneyShop/image/奶油蛋糕1.jpg" 
          }, 
          { 
            child_id: 2, 
            name: '奶油蛋糕2', 
            image: "http://49.234.78.37/appHoneyShop/image/奶油蛋糕2.jpg" 
          }, 
          { 
            child_id: 3, 
            name: '奶油蛋糕3', 
            image: "http://49.234.78.37/appHoneyShop/image/奶油蛋糕3.jpg" 
          }, 
          { 
            child_id: 4, 
            name: '奶油蛋糕4', 
            image: "http://49.234.78.37/appHoneyShop/image/奶油蛋糕4.jpg" 
          }
        ]
      },
      {
        cate_id:2,
        cate_name:'毕业蛋糕',
        children: [
          { 
            child_id: 1, 
            name: '毕业蛋糕1', 
            image: "http://49.234.78.37/appHoneyShop/image/毕业蛋糕1.jpg" 
          }, 
          { 
            child_id: 2, 
            name: '毕业蛋糕2', 
            image: "http://49.234.78.37/appHoneyShop/image/毕业蛋糕2.jpg" 
          }, 
          { 
            child_id: 3, 
            name: '毕业蛋糕3', 
            image: "http://49.234.78.37/appHoneyShop/image/毕业蛋糕3.jpg" 
          }, 
          { 
            child_id: 4, 
            name: '毕业蛋糕4', 
            image: "http://49.234.78.37/appHoneyShop/image/毕业蛋糕4.jpg" 
          }, 
          { 
            child_id: 5, 
            name: '毕业蛋糕5', 
            image: "http://49.234.78.37/appHoneyShop/image/毕业蛋糕5.jpg" 
          }
        ]
      },
      {
        cate_id:3,
        cate_name:'下午茶',
        children: [
          { 
            child_id: 1, 
            name: '下午茶1', 
            image: "http://49.234.78.37/appHoneyShop/image/下午茶1.jpg" 
          }, 
          { 
            child_id: 2, 
            name: '下午茶2', 
            image: "http://49.234.78.37/appHoneyShop/image/下午茶2.jpg" 
          }, 
          { 
            child_id: 3, 
            name: '下午茶3', 
            image: "http://49.234.78.37/appHoneyShop/image/下午茶3.jpg" 
          }, 
          { 
            child_id: 4, 
            name: '下午茶4', 
            image: "http://49.234.78.37/appHoneyShop/image/下午茶4.jpg" 
          }, 
          { 
            child_id: 5, 
            name: '下午茶5', 
            image: "http://49.234.78.37/appHoneyShop/image/下午茶5.jpg" 
          }, 
          { 
            child_id: 6, 
            name: '下午茶6', 
            image: "http://49.234.78.37/appHoneyShop/image/下午茶6.jpg" 
          }, 
          { 
            child_id: 7, 
            name: '下午茶7', 
            image: "http://49.234.78.37/appHoneyShop/image/下午茶7.jpg" 
          }, 
          { 
            child_id: 8, 
            name: '下午茶8', 
            image: "http://49.234.78.37/appHoneyShop/image/下午茶8.jpg" 
          }, 
          { 
            child_id: 9, 
            name: '下午茶9', 
            image: "http://49.234.78.37/appHoneyShop/image/下午茶9.jpg" 
          }, 
          { 
            child_id: 10, 
            name: '下午茶10', 
            image: "http://49.234.78.37/appHoneyShop/image/下午茶10.jpg" 
          }
        ]
      },
      {
        cate_id: 4,
        cate_name: '早点',
        children: [
          { 
            child_id: 1, 
            name: '早点1', 
            image: "http://49.234.78.37/appHoneyShop/image/早点1.jpg" 
          }, 
          { 
            child_id: 2, 
            name: '早点2', 
            image: "http://49.234.78.37/appHoneyShop/image/早点2.jpg" 
          },
          { 
            child_id: 3, 
            name: '早点3', 
            image: "http://49.234.78.37/appHoneyShop/image/早点3.jpg" 
          },
          { 
            child_id: 4, 
            name: '早点4', 
            image: "http://49.234.78.37/appHoneyShop/image/早点4.jpg" 
          },
          { 
            child_id: 5, 
            name: '早点5', 
            image: "http://49.234.78.37/appHoneyShop/image/早点5.jpg" 
          },
          { 
            child_id: 6, 
            name: '早点6', 
            image: "http://49.234.78.37/appHoneyShop/image/早点6.jpg" 
          },
          { 
            child_id: 7, 
            name: '早点7', 
            image: "http://49.234.78.37/appHoneyShop/image/早点7.jpg" 
          },
          { 
            child_id: 8, 
            name: '早点8', 
            image: "http://49.234.78.37/appHoneyShop/image/早点8.jpg" 
          },
          { 
            child_id: 9, 
            name: '早点9', 
            image: "http://49.234.78.37/appHoneyShop/image/早点9.jpg" 
          }
        ]
      },
      {
        cate_id: 5,
        cate_name: '粽子',
        children: [
          { 
            child_id: 1, 
            name: '粽子1', 
            image: "http://49.234.78.37/appHoneyShop/image/粽子1.jpg" 
          }, 
          { 
            child_id: 2, 
            name: '粽子2', 
            image: "http://49.234.78.37/appHoneyShop/image/粽子2.jpg" 
          }
        ]
      },
      {
        cate_id: 6,
        cate_name: '其他',
        children: [
          { 
            child_id: 1, 
            name: '其他1', 
            image: "http://49.234.78.37/appHoneyShop/image/其他1.jpg" 
          }, 
          { 
            child_id: 2, 
            name: '其他2', 
            image: "http://49.234.78.37/appHoneyShop/image/其他2.jpg" 
          }, 
          { 
            child_id: 3, 
            name: '其他3', 
            image: "http://49.234.78.37/appHoneyShop/image/其他3.jpg" 
          }, 
          { 
            child_id: 4, 
            name: '其他4', 
            image: "http://49.234.78.37/appHoneyShop/image/其他4.jpg" 
          }, 
          { 
            child_id: 5, 
            name: '其他5', 
            image: "http://49.234.78.37/appHoneyShop/image/其他5.jpg" 
          }, 
          { 
            child_id: 6, 
            name: '其他6', 
            image: "http://49.234.78.37/appHoneyShop/image/其他6.jpg" 
          }
        ]
      }
    ],
    curNav:1,
    curIndex:0
  },
  switchRightTab:function(e){
    let id = e.target.dataset.id,index=e.target.dataset.index;
    this.setData({
      curNav:id,
      curIndex:index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      search: this.search.bind(this)
    })
  },
  search: function (value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{text: '搜索结果', value: 1}, {text: '搜索结果2', value: 2}])
        }, 200)
    })
},
selectResult: function (e) {
    console.log('select result', e.detail)
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