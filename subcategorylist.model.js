const db = require('../db/db.js');

const subcategorymodel = function(subcategorymodel){
    this.subcategory_id = subcategorymodel.subcategory_id;
    this.subcategory_name = subcategorymodel.subcategory_name;
    this.subcategory_status = subcategorymodel.subcategory_status  
}

// Adding a category

subcategorymodel.addfunction = (fromcontroller, tocontroller) => {
    var sql = `INSERT INTO subcategory_tbl (subcategory_id, subcategory_name, subcategory_status) VALUES ('${fromcontroller.subcategory_id}', 
        '${fromcontroller.subcategory_name}', '${fromcontroller.subcategory_status}')`;
    db.query(sql, (err, res)=>{
        console.log(res);
        if(err){
            var data = {
                status:"100",
                messsage:"DB query error"
            }
            tocontroller(null, data);
        }else if (res.affectedRows>0){
            var data = {
                status:"1",
                messsage:"Successfully Added A Sub Category"
            }
            tocontroller(null, data);
        }else{
            var data = {
                status:"10",
                messsage:"Failed to Add a sub category"
            }
            tocontroller(null, data);
        }
    });  
}

//edit category

subcategorymodel.updatefunction = (fromcontroller, tocontroller) =>{
 
    var sql = `UPDATE subcategory_tbl SET subcategory_name = '${fromcontroller.subcategory_name}', subcategory_status = '${fromcontroller.subcategory_status}' WHERE subcategory_id = '${fromcontroller.subcategory_id}' `;
     db.query(sql,(err, res)=>{
         console.log(res);
         if(err){
             var data = {
                 status:"100",
                 messsage:"DB query error"
             }
             tocontroller(null, data);
         }else if (res.affectedRows>0){
             var data = {
                 status:"1",
                 messsage:"SUB CATEGORY UPDATED SUCCESSFULLY"
             }
             tocontroller(null, data);
         }else{
             var data = {
                 status:"10",
                 messsage:"Erroe while Updating the sub category"
             }
             tocontroller(null, data);
         }
     });
 }

 subcategorymodel.deletefunction = (fromcontroller, tocontroller) =>{
 
    var sql = `DELETE FROM subcategory_tbl  WHERE subcategory_id = '${fromcontroller.subcategory_id}'`;
     db.query(sql,(err, res)=>{
         console.log(res);
         if(err){
             var data = {
                 status:"100",
                 messsage:"DB query error"
             }
             tocontroller(null, data);
         }else if (res.affectedRows >0){
             var data = {
                 status:"1",
                 messsage:"DELETED THE SUB CATEGORY"
             }
             tocontroller(null, data);
         }else{
             var data = {
                 status:"10",
                 messsage:"Erroe while Deleting the sub category"
             }
             tocontroller(null, data);
         }
     });
 }

 module.exports=subcategorymodel;
