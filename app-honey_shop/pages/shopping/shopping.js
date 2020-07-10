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
            image: "http://49.234.78.37/appHoneyShop/image/奶油蛋糕1.jpg" ,
            price_six:'170元',
            price_eight:'240元',
            discribe:'酸奶提子夹心,稀奶油,新鲜水果'
          }, 
          { 
            child_id: 2, 
            name: '奶油蛋糕2', 
            image: "http://49.234.78.37/appHoneyShop/image/奶油蛋糕2.jpg" ,
            price_six:'170元',
            price_eight:'240元',
            discribe:'酸奶提子夹心,稀奶油,新鲜水果'
          }, 
          { 
            child_id: 3, 
            name: '奶油蛋糕3', 
            image: "http://49.234.78.37/appHoneyShop/image/奶油蛋糕3.jpg" ,
            price_six:'170元',
            price_eight:'240元',
            discribe:'酸奶提子夹心,稀奶油,新鲜水果'
          }, 
          { 
            child_id: 4, 
            name: '奶油蛋糕4', 
            image: "http://49.234.78.37/appHoneyShop/image/奶油蛋糕4.jpg" ,
            price_six:'170元',
            price_eight:'240元',
            discribe:'酸奶提子夹心,稀奶油,新鲜水果'
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
            image: "http://49.234.78.37/appHoneyShop/image/毕业蛋糕1.jpg" ,
            price_six:'170元',
            price_eight:'240元',
            discribe:'酸奶提子夹心,稀奶油,新鲜水果'
          }, 
          { 
            child_id: 2, 
            name: '毕业蛋糕2', 
            image: "http://49.234.78.37/appHoneyShop/image/毕业蛋糕2.jpg" ,
            price_six:'170元',
            price_eight:'240元',
            discribe:'酸奶提子夹心,稀奶油,新鲜水果'
          }, 
          { 
            child_id: 3, 
            name: '毕业蛋糕3', 
            image: "http://49.234.78.37/appHoneyShop/image/毕业蛋糕3.jpg" ,
            price_six:'170元',
            price_eight:'240元',
            discribe:'酸奶提子夹心,稀奶油,新鲜水果'
          }, 
          { 
            child_id: 4, 
            name: '毕业蛋糕4', 
            image: "http://49.234.78.37/appHoneyShop/image/毕业蛋糕4.jpg" ,
            price_six:'170元',
            price_eight:'240元',
            discribe:'酸奶提子夹心,稀奶油,新鲜水果'
          }, 
          { 
            child_id: 5, 
            name: '毕业蛋糕5', 
            image: "http://49.234.78.37/appHoneyShop/image/毕业蛋糕5.jpg" ,
            price_six:'170元',
            price_eight:'240元',
            discribe:'酸奶提子夹心,稀奶油,新鲜水果'
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
            image: "http://49.234.78.37/appHoneyShop/image/下午茶1.jpg" ,
            price:'25元',
            discribe:'香草蛋糕,新鲜草莓,约150克一个'
          }, 
          { 
            child_id: 2, 
            name: '下午茶2', 
            image: "http://49.234.78.37/appHoneyShop/image/下午茶2.jpg" ,
            price:'25元',
            discribe:'香草蛋糕,新鲜草莓,约150克一个'
          }, 
          { 
            child_id: 3, 
            name: '下午茶3', 
            image: "http://49.234.78.37/appHoneyShop/image/下午茶3.jpg" ,
            price:'25元',
            discribe:'香草蛋糕,新鲜草莓,约150克一个'
          }, 
          { 
            child_id: 4, 
            name: '下午茶4', 
            image: "http://49.234.78.37/appHoneyShop/image/下午茶4.jpg" ,
            price:'25元',
            discribe:'香草蛋糕,新鲜草莓,约150克一个'
          }, 
          { 
            child_id: 5, 
            name: '下午茶5', 
            image: "http://49.234.78.37/appHoneyShop/image/下午茶5.jpg" ,
            price:'25元',
            discribe:'香草蛋糕,新鲜草莓,约150克一个'
          }, 
          { 
            child_id: 6, 
            name: '下午茶6', 
            image: "http://49.234.78.37/appHoneyShop/image/下午茶6.jpg" ,
            price:'25元',
            discribe:'香草蛋糕,新鲜草莓,约150克一个'
          }, 
          { 
            child_id: 7, 
            name: '下午茶7', 
            image: "http://49.234.78.37/appHoneyShop/image/下午茶7.jpg" ,
            price:'25元',
            discribe:'香草蛋糕,新鲜草莓,约150克一个'
          }, 
          { 
            child_id: 8, 
            name: '下午茶8', 
            image: "http://49.234.78.37/appHoneyShop/image/下午茶8.jpg" ,
            price:'25元',
            discribe:'香草蛋糕,新鲜草莓,约150克一个'
          }, 
          { 
            child_id: 9, 
            name: '下午茶9', 
            image: "http://49.234.78.37/appHoneyShop/image/下午茶9.jpg" ,
            price:'25元',
            discribe:'香草蛋糕,新鲜草莓,约150克一个'
          }, 
          { 
            child_id: 10, 
            name: '下午茶10', 
            image: "http://49.234.78.37/appHoneyShop/image/下午茶10.jpg" ,
            price:'25元',
            discribe:'香草蛋糕,新鲜草莓,约150克一个'
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
            image: "http://49.234.78.37/appHoneyShop/image/早点1.jpg" ,
            price:'25元',
            discribe:'香草蛋糕,新鲜草莓,约150克一个'
          }, 
          { 
            child_id: 2, 
            name: '早点2', 
            image: "http://49.234.78.37/appHoneyShop/image/早点2.jpg" ,
            price:'25元',
            discribe:'香草蛋糕,新鲜草莓,约150克一个'
          },
          { 
            child_id: 3, 
            name: '早点3', 
            image: "http://49.234.78.37/appHoneyShop/image/早点3.jpg" ,
            price:'25元',
            discribe:'香草蛋糕,新鲜草莓,约150克一个'
          },
          { 
            child_id: 4, 
            name: '早点4', 
            image: "http://49.234.78.37/appHoneyShop/image/早点4.jpg" ,
            price:'25元',
            discribe:'香草蛋糕,新鲜草莓,约150克一个'
          },
          { 
            child_id: 5, 
            name: '早点5', 
            image: "http://49.234.78.37/appHoneyShop/image/早点5.jpg" ,
            price:'25元',
            discribe:'香草蛋糕,新鲜草莓,约150克一个'
          },
          { 
            child_id: 6, 
            name: '早点6', 
            image: "http://49.234.78.37/appHoneyShop/image/早点6.jpg" ,
            price:'25元',
            discribe:'香草蛋糕,新鲜草莓,约150克一个'
          },
          { 
            child_id: 7, 
            name: '早点7', 
            image: "http://49.234.78.37/appHoneyShop/image/早点7.jpg" ,
            price:'25元',
            discribe:'香草蛋糕,新鲜草莓,约150克一个'
          },
          { 
            child_id: 8, 
            name: '早点8', 
            image: "http://49.234.78.37/appHoneyShop/image/早点8.jpg" ,
            price:'25元',
            discribe:'香草蛋糕,新鲜草莓,约150克一个'
          },
          { 
            child_id: 9, 
            name: '早点9', 
            image: "http://49.234.78.37/appHoneyShop/image/早点9.jpg" ,
            price:'25元',
            discribe:'香草蛋糕,新鲜草莓,约150克一个'
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
            image: "http://49.234.78.37/appHoneyShop/image/粽子1.jpg" ,
            price:'25元',
            discribe:'香草蛋糕,新鲜草莓,约150克一个'
          }, 
          { 
            child_id: 2, 
            name: '粽子2', 
            image: "http://49.234.78.37/appHoneyShop/image/粽子2.jpg" ,
            price:'25元',
            discribe:'香草蛋糕,新鲜草莓,约150克一个'
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
            image: "http://49.234.78.37/appHoneyShop/image/其他1.jpg" ,
            price:'25元',
            discribe:'香草蛋糕,新鲜草莓,约150克一个'
          }, 
          { 
            child_id: 2, 
            name: '其他2', 
            image: "http://49.234.78.37/appHoneyShop/image/其他2.jpg" ,
            price:'25元',
            discribe:'香草蛋糕,新鲜草莓,约150克一个'
          }, 
          { 
            child_id: 3, 
            name: '其他3', 
            image: "http://49.234.78.37/appHoneyShop/image/其他3.jpg" ,
            price:'25元',
            discribe:'香草蛋糕,新鲜草莓,约150克一个'
          }, 
          { 
            child_id: 4, 
            name: '其他4', 
            image: "http://49.234.78.37/appHoneyShop/image/其他4.jpg" ,
            price:'25元',
            discribe:'香草蛋糕,新鲜草莓,约150克一个'
          }, 
          { 
            child_id: 5, 
            name: '其他5', 
            image: "http://49.234.78.37/appHoneyShop/image/其他5.jpg" ,
            price:'25元',
            discribe:'香草蛋糕,新鲜草莓,约150克一个'
          }, 
          { 
            child_id: 6, 
            name: '其他6', 
            image: "http://49.234.78.37/appHoneyShop/image/其他6.jpg" ,
            price:'25元',
            discribe:'香草蛋糕,新鲜草莓,约150克一个'
          }
        ]
      }
    ],
    curNav:1,
    curIndex:0,
    showOneButtonDialog: false,
    oneButton: [{text: '加入购物车'}],
    // 是否展示六英寸蛋糕的价格
    isSix:true,
  },
  open: function () {
    
},
buttontap(e) {
    console.log(e.detail)
},
  switchRightTab:function(e){
    let id = e.target.dataset.id,index=e.target.dataset.index;
    console.log(id,index,"555555555555");
    this.setData({
      curNav:id,
      curIndex:index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  // onLoad: function (options) {
  //   this.setData({
  //     search: this.search.bind(this)
  //   })
  // },
  // search: function (value) {
  //   return new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //           resolve([{text: '搜索结果', value: 1}, {text: '搜索结果2', value: 2}])
  //       }, 200)
  //   })
  // },
  tapDialogButton(e) {
    console.log(111111111);
    this.setData({
        showOneButtonDialog: false
    })
},
  // 页面中选择某个产品时
  chooseFood:function(e){
    // console.log(e.target.dataset);
    console.log(e.currentTarget.dataset.index);
    this.setData({
      detile:{},
      detile:e.currentTarget.dataset.index,
      showOneButtonDialog: true
    })
  },
  // 选择不同规格蛋糕时控制展示不同价格
  radioChange:function(e){
    if(e.detail.value == "six"){
      this.setData({
        isSix:true
      })
    }else{
      this.setData({
        isSix:false
      })
    }
  },
// selectResult: function (e) {
//     console.log('select result', e.detail)
// },
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