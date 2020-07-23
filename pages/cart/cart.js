// pages/cart/cart.js
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast'
Page({
       
        /**
         * 页面的初始数据
         */
        data: {
                goodsList: [
                //         {
                //             id: 1,
                //             carName: "商品名称",
                //             carImage: "../../image/goods01.jpg",
                //             carAddress: "广州",
                //             carPrice: "111.00",
                //             carNum:1
                //         },
                //         {
                //             id: 1,
                //             carName: "商品名称",
                //             carImage: "../../image/goods01.jpg",
                //             carAddress: "广州",
                //             carPrice: "111.00",
                //             carNum:1
                //         },
                //         {
                //             id: 1,
                //             carName: "商品名称",
                //             carImage: "../../image/goods01.jpg",
                //             carAddress: "广州",
                //             carPrice: "123.00",
                //             carNum:1
                //         },
                //         {
                //             id: 1,
                //             carName: "商品名称",
                //             carImage: "../../image/goods01.jpg",
                //             carAddress: "广州",
                //             carPrice: "456.00",
                //             carNum:1
                //         }
                    ],
                    totalPrice:0//默认值
        },
        
        // 加法运算
        carAdd(options){
                console.log(options)
                var index=options.target.dataset.id;
                var num=this.data.goodsList[index].carNum+1;
                var key="goodsList["+index+"].carNum";
                var obj={};
                obj[key]=num
                this.setData(obj)
                this.getTotalData()
        },
        // 减法运算
        carReduce(options){
                var index=options.target.dataset.id; 
                var num=this.data.goodsList[index].carNum;
                var key="goodsList["+index+"].carNum";
                var obj={}
                if(num<=1){
                        obj[key]=1
                }else{
                        num--;
                        obj[key]=num
                }
                this.setData(obj)
                wx.setStorageSync("GoodsCarList",this.data.goodsList)
                this.getTotalData()
        },
        // 删除功能
        carDel(options){
                var index=options.target.dataset.id; 
                this.data.goodsList.splice(index,1)
                this.setData({
                        goodsList:this.data.goodsList
                })   
                wx.setStorageSync("GoodsCarList",this.data.goodsList)
                this.getTotalData()
        },
        // 计算总价格
        getTotalData(){
           var totalPrice=this.data.goodsList.reduce(function(total,data){
                return total+data.carNum*data.carPrice
           },0) 
           this.setData({
                //    totalPrice
                totalPrice:parseFloat(totalPrice).toFixed(2)
           })    
        },
        getPay(){
              
               if(!this.data.goodsList){
                        Toast.fail('请添加商品');
                        return    
               } 
                wx.navigateTo({
                        url: '../pay/pay',
                })
                this.setData({
                        //    totalPrice
                        totalPrice:0
                   })    
        },
        /**
         * 生命周期函数--监听页面加载
         */
        onLoad: function (options) {
                this.getTotalData()
                
        },

        /**
         * 生命周期函数--监听页面初次渲染完成
         */
        onReady: function () {
                this.getTotalData()
        },

        /**
         * 生命周期函数--监听页面显示
         */
        onShow: function () {
                var  getCardata=wx.getStorageSync("GoodsCarList")
                this.setData({
                        goodsList:getCardata
                })
                this.getTotalData()
        },

        /**
         * 生命周期函数--监听页面隐藏
         */
        onHide: function () {
                wx.setStorageSync("GoodsCarList",this.data.goodsList)
        },

        /**
         * 生命周期函数--监听页面卸载
         */
        onUnload: function () {
                wx.setStorageSync("GoodsCarList",this.data.goodsList)
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