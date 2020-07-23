var {url,method}=require("./config.js");

module.exports={
    categoryContent(success){
        wx.request({
          url: `${url}categorycon`,
          method,
         
        //   success(res){
        //       callback(res)
        //   }
        success
        })
    }
}