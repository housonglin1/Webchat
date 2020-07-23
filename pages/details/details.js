let {goodsListIdData}=require("../../Api/goodslist.js")
// pages/details/details.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imgs:[
            "../../image/goods01.jpg",
            "../../image/goods02.jpg",
            "../../image/goods03.jpg",
            "../../image/goods04.jpg",
          ],
          goods:[
            //   {
            //       id:3,
            //       goodsName:"余浩牌傻帽",
            //       goodsImage:"../../image/goods03.jpg",
            //       goodsImgs:[
            //         "../../image/goods01.jpg",
            //         "../../image/goods02.jpg",
            //         "../../image/goods03.jpg",
            //       ],
            //       goodsPrice:"200",
            //       goodsPriceOld:"300",
            //       goodsDetails:"../../image/IMG_0466.JPG"
            //   }
          ],
          num:0,
    },
    getCart(){
        wx.switchTab({
          url: '/pages/cart/cart',
        })
    },
    getIndex(){
        wx.switchTab({
          url: '/pages/index/index',
        })
    },
    getCarNum(){

        var CarData = {
            id: this.data.goods[0].id,
            carTitle:this.data.goods[0].goodsTitle,
            carName: this.data.goods[0].goodsName,
            carImage: this.data.goods[0].goodsImage,
            carPrice: this.data.goods[0].goodsPrice,
            carNum:1
        }

        // 1.判断数据缓存中是否有数据
        var GoodsCarList = wx.getStorageSync("GoodsCarList");
        if(GoodsCarList){
            var isGoodsData = true; //默认状态，没有相同数据
            // 2.有数据，相同数据数量加一
            for(var i = 0;i < GoodsCarList.length;i++){
                if(GoodsCarList[i].id == this.data.goods[0].id){
                    GoodsCarList[i].carNum += 1;
                    isGoodsData = false
                }
            }
            // 3.有数据，没有相同数据添加数组
            if(isGoodsData){
                // 没有相同数据
                GoodsCarList.push(CarData);
                isGoodsData = true;
            }
            wx.setStorageSync('GoodsCarList', GoodsCarList)
        }else{
            // 4.没有数据，添加数据
            wx.setStorageSync("GoodsCarList",[CarData]);
        }
        this.setData({
            num:wx.getStorageSync("GoodsCarList").length
        })

    },
  


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function ({id}) {
        console.log(id)
        let _this=this;
        goodsListIdData(id,function({data:{result}}){
            console.log(result)
            _this.setData({
                goods:[
                    {
                        id:result.id,
                        goodsTitle:result.goodsTitle,
                        goodsName:result.goodsName,
                        goodsImage:result.goodsImage,
                        goodsImgs:result.goodsImgs,
                        goodsPrice:result.goodsPrice,
                        goodsPriceOld:"300",
                        goodsDetailsL:"../../image/IMG_0466.JPG"

                    }
                ]
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
        this.setData({
            num:wx.getStorageSync("GoodsCarList").length
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