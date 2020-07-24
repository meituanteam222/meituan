const Service = require('egg').Service;
class RootService extends Service {
  async search(keyword) {
 
    var sql1=`select * from  goods where title like '%${keyword}%' `
    var sql2=`select * from  hui where title like '%${keyword}%' `
    var data1 = await this.app.mysql.query(sql1);
	var data2 = await this.app.mysql.query(sql2);
	
    return {goodsarr:data1,huiarr:data2};
  }
  async allgoods(uid) {
          var data = await this.app.mysql.query(`select * from goods limit 0,10`);
          return data;
      }
    async products() {
      
          const sql=`select * from goods goods limit 0,3`
          const data = await this.app.mysql.query(sql);
          return data;
        }
  
   async register(paramsObj){
          const sql1=`select * from hui where title="${paramsObj.companyname}"`
          const re=await this.app.mysql.query(sql1)
          if(re.length==0){
           
            const sql2=`insert into hui(title,img) values ("${paramsObj.companyname}","${paramsObj.imgurl}")`
            await this.app.mysql.query(sql2)
            return{code:1}
            
          }else{
            
            return{code:0}
  
          }
        }
  
}
module.exports = RootService;