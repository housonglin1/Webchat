// pages/pay/pay.js
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';
// import Toast from '../../node_modules/@vant/weapp/dist/toast/toast';
let {goodsListIdData}=require("../../Api/goodslist.js")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        totalPrice:0,
        goodsList:[],
      
        // OrderList:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function ({id}) {
      console.log(id)
      let _this=this;
      goodsListIdData(id,function({data:{result}}){
        if(result){
          console.log(result)
          _this.setData({
            goodsList:[
                {
                    id:result.id,
                    carTitle:result.goodsTitle,
                    carName:result.goodsName,
                    carImage:result.goodsImage,
                    carPrice:result.goodsPrice,
                    carNum:1  

                }
            ],
            totalPrice:result.goodsPrice
        })
        
       
        }
         
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
        var getCardata=wx.getStorageSync("GoodsCarList")
       
        this.setData({
            goodsList:getCardata,
           
        })
        this.getTotalData()
      
    },
     // 计算总价格
     getTotalData(){
        var totalPrice = this.data.goodsList.reduce(function(total,data){
            return total+data.carNum * data.carPrice;
        },0);
        this.setData({
            totalPrice: parseFloat(totalPrice).toFixed(2)
        })
    },
    getPay(){
      // if(!this.data.totalPrice){
      //   Toast('订单不能为空');
      //   return
      // }
      var OrderList=  wx.getStorageSync('OrderList')?wx.getStorageSync('OrderList'):[];   
     
         var obj={
                orderId:new Date().getTime(),
                dateTime:new Date(),
                goodsList:this.data.goodsList,
                total:this.data.totalPrice
          }
        Dialog.confirm({
            title: '标题',
            message: '是否支付订单',
          })
            .then(() => {
               obj.type=2;  
               OrderList.unshift(obj)
              wx.setStorageSync('OrderList',  OrderList)
              wx.removeStorageSync("GoodsCarList")
              wx.navigateTo({
                url: '../orderList/orderList',
              })
            })
            .catch(() => {
               obj.type=1;
               OrderList.unshift(obj)
               wx.setStorageSync('OrderList',  OrderList)
              
               wx.removeStorageSync("GoodsCarList")
               wx.navigateTo({
                url: '../orderList/orderList',
              })
            });
           
           
            
             
           
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