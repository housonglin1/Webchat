var {url,method}=require("./config.js")

module.exports={
    categoryData(success){
        wx.request({
          url: `${url}category`,
          method,
        //   success(res){
        //       callback(res)
        //   }
        success
        })
    }
}