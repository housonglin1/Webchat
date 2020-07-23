 var {goodsListData}=require("../../Api/goodslist.js")
 var  {categoryData}=require("../../Api/category.js")
 Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs:[
    
   " https://gw.alicdn.com/imgextra/i2/1209780/O1CN01bE8ZRt2M7I8FnXpd3_!!1209780-0-lubanu.jpg_790x10000Q75.jpg_.webp",
   "https://gw.alicdn.com/imgextra/i3/1822939/O1CN01XcwoO51Xa6eDJXsnX_!!1822939-0-lubanu.jpg_790x10000Q75.jpg_.webp "  ,
   "https://gw.alicdn.com/tps/i4/TB1JXKCbjMZ7e4jSZFOSut7epXa.jpg_790x10000Q75.jpg_.webp ",
   "https://gw.alicdn.com/imgextra/i2/1800474/O1CN01sDF5Wb1FN8LMiTq8Y_!!1800474-0-lubanu.jpg_790x10000Q75.jpg_.webp ",
     "https://gw.alicdn.com/imgextra/i4/1209780/O1CN01d6EzxX2M7I8GGrpfO_!!1209780-0-lubanu.jpg_790x10000Q75.jpg_.webp "   
    ],
    iconArray:[
        {
            iconUrl: "https://image1.suning.cn/uimg/cms/img/156326648332424165.png",
            iconText: "家电"
        },
        {
            iconUrl: "https://image1.suning.cn/uimg/cms/img/156326606906353706.png",
            iconText: "母婴"
        },
        {
            iconUrl: "https://image1.suning.cn/uimg/cms/img/156326778795377202.png",
            iconText: "户外"
        },
        {
            iconUrl: "https://imgservice2.suning.cn/uimg1/anubis/pindao/E6xa8RiJo8jfBMpo1NxbfQ.png",
            iconText: "手机"
        },
        {
            iconUrl: "//imgservice1.suning.cn/uimg1/anubis/pindao/jKqjU0E97fEbLrelRsIm2w.png",
            iconText: "超市"
        },
        {
            iconUrl: "https://image1.suning.cn/uimg/cms/img/157862161975554823.png",
            iconText: "珠宝"
        },
        {
            iconUrl: "https://image1.suning.cn/uimg/cms/img/156326672806196268.png",
            iconText: "服饰"
        },
        {
            iconUrl: "https://image1.suning.cn/uimg/cms/img/156326677608642853.png",
            iconText: "电脑"
        },
        {
            iconUrl: "https://image1.suning.cn/uimg/cms/img/157061041450337278.png",
            iconText: "酒水"
        },
        {
            iconUrl: "//image1.suning.cn/uimg/cms/img/158408301776603038.png",
            iconText: "医药"
        },
      ],
      goodsList: [
        {
            id: 1,
            goodsName: "肥龙加厚珐琅搪瓷1.2L漏嘴奶锅煮麦片宝宝米糊热牛奶电磁炉燃气用",
            goodsImage: "https://gw.alicdn.com/bao/uploaded/i1/43623533/O1CN01eH7uQH1by9rvahdVH_!!43623533.jpg_500x500q90.jpg_.webp",
            goodsBuy:"230",
            goodsPrice: "222.00"
        },
        {
            id: 2,
            goodsName: "天天特价不锈钢提锅饭桶饭盒多层户外便当盒学生餐盒可电磁炉加热",
            goodsImage: "https://gw.alicdn.com/bao/uploaded/i3/85981602/TB21xhXiN9YBuNjy0FfXXXIsVXa_!!85981602.jpg_500x500q90.jpg_.webp",
            goodsBuy:"230",
            goodsPrice: "22.00"
        },
       
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
 
    var _this=this;
    categoryData(function(res){
        console.log(res)
        _this.setData({

            "iconArray":res.data.result
        })
    })

    goodsListData(function(res){
        var data=res.data.result;
            var arr=[];
            console.log(data)
            // data.forEach(item=>{
            //     arr.push({
            //         id: item.id,
            //         goodsName: item.name,
            //         goodsImage: item.image,
            //         goodsAddress: "广州",
            //         goodsPrice: item.price
            //     })
            // })
            _this.setData({
                "goodsList":data
            })
    })
    // wx.request({
    //     url:"http://127.0.0.1:3000/goodsList",
    //     success(res){
    //         var data=res.data.result;
    //         var arr=[];
    //         data.forEach(item=>{
    //             arr.push({
    //                 id: item.id,
    //                 goodsName: item.name,
    //                 goodsImage: item.image,
    //                 goodsAddress: "广州",
    //                 goodsPrice: item.price
    //             })
    //         })
    //         _this.setData({
    //             "goodsList":arr
    //         })
    //     }
    // })
  },
  getCategory(options){
        var  id=options.target.dataset.id
        console.log(id)
        wx.setStorageSync('CategoryId', id)
        wx.switchTab({
          url: '/pages/category/category',
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