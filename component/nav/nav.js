Component({
  /**
   * 组件的属性列表
   */
  properties: {
    type: {
      type: Number,
      value:0
    },
   

    
  },

  /**
   * 组件的初始数据
   */
  data: {
    //暂时没有内部数据，如果有需要通过setData函数修改值
    OrderList:[],
    typelist:["待付款","待收货","待评价"]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 支付订单
    onPay(options){
      let id = options.target.dataset.id;
      let index = this.data.OrderList.findIndex(item=>item.orderId===id)
      let orderlist=this.data.OrderList
      orderlist[index].type=2  
      this.setData({
        OrderList:orderlist
      })
      wx.setStorageSync('OrderList', this.data.OrderList)
    },

    // 删除订单
    onDel(options){
      let id = options.target.dataset.id;
      let index = this.data.OrderList.findIndex(item=>item.orderId===id)
      let orderlist=this.data.OrderList
      orderlist.splice(index,1)
      this.setData({
        OrderList:orderlist
      })
      wx.setStorageSync('OrderList', this.data.OrderList)
    },

    // 确认收货
    onGood(options){
      let id = options.target.dataset.id;
      let index = this.data.OrderList.findIndex(item=>item.orderId===id)
      let orderlist=this.data.OrderList
      orderlist[index].type=3  
      this.setData({
        OrderList:orderlist
      })
      wx.setStorageSync('OrderList', this.data.OrderList)
    },

    // 在线评价
    onEnd(options){
      let id = options.target.dataset.id;
      let index = this.data.OrderList.findIndex(item=>item.orderId===id)
    },
    
    // 退款售后
    onRefund(options){

    }
  },
  

  lifetimes: {
    // 组件的生命周期函数，用于声明组件的生命周期
    created(){
  
      
    },
    attached (){
      console.log(this.properties.type)
      let OrderList= wx.getStorageSync("OrderList")
       console.log(OrderList)
       this.setData({
         OrderList:OrderList
     })
     
    },
    ready() {
      console.log(2)
    },
    moved () {
      console.log("wo")
     },
    detached: () => {
      console.log(4)
    },
 
  },
})
