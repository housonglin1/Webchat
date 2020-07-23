var {url,method}=require("./config.js");

module.exports={
    goodsListData(callback){
        wx.request({
          url: `${url}goodsList`,
          method,
          success(res){
              callback(res)
          }
        //   success
        })
    },
    goodsListIdData(id,callback){
        wx.request({
          url: `${url}goodsList/${id}`,
          method,
          success(res){
              callback(res)
          }
        })
    }
}