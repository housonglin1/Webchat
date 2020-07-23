
var {goodsListData}=require("../../Api/goodslist.js")
var {categoryData}=require("../../Api/category.js")
var {categoryContent}=require("../../Api/categoryContent.js")
Page({

        /**
         * 页面的初始数据
         */
        data: {
                categoryitem:["手机","电脑","音响","耳机","电脑","音响","耳机","电脑","音响","耳机","电脑","音响","耳机","电脑","音响","耳机","电脑","音响","耳机"],
                conId:0,
                goodcontent:[
                        "../../image/goods01.jpg",
                        "../../image/goods02.jpg",
                        "../../image/goods03.jpg",
                        "../../image/goods04.jpg",
                    ],
        },
        itemclick(event){
           console.log(event)
           var id =event.target.dataset.id;
           this.setData({
                   conId:id
           })
        },

        /**
         * 生命周期函数--监听页面加载
         */
        onLoad: function (options) {
        var _this=this;
        categoryData(function(res){
                _this.setData({
                        "categoryitem":res.data.result
                })
        })
        categoryContent(function(res){
                console.log("1111")
                console.log(res)
                var data=res.data.result;
               console.log(data)
                var arr=[];
                // data.forEach((item)=>{
                //        arr.push({
                //         id: item.id,
                //         goodsName: item.name,
                //         goodsImage: item.image,
                //         goodsAddress: "广州",
                //         goodsPrice: item.price
                //        }) 
                // })
                _this.setData({
                    "goodcontent":data    
                })
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
                var CategoryId=wx.getStorageSync("CategoryId");
                console.log(CategoryId)
                CategoryId=CategoryId?CategoryId-1:0;
           let _this=this;
           wx.getSystemInfo({
             success: (result) => {
                     -this.setData({
                             conId:CategoryId,
                             scrollHeight:result.windowHeight
                     })
             },
           })
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