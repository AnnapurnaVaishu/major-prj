const db = require('../db/db.js');

const categorymodel = function(categorymodel){
    this.category_id = categorymodel.category_id;
    this.category_name = categorymodel.category_name;
    this.category_status = categorymodel.category_status  
}

// Adding a category

categorymodel.addfunction = (fromcontroller, tocontroller) => {
    var sql = `INSERT INTO category_tbl (category_id, category_name, category_status) VALUES ('${fromcontroller.category_id}', 
        '${fromcontroller.category_name}', '${fromcontroller.category_status}')`;
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
                messsage:"Successfully Added A Category"
            }
            tocontroller(null, data);
        }else{
            var data = {
                status:"10",
                messsage:"Failed to Add a category"
            }
            tocontroller(null, data);
        }
    });  
}

//edit category

categorymodel.updatefunction = (fromcontroller, tocontroller) =>{
 
    var sql = `UPDATE category_tbl SET category_name = '${fromcontroller.category_name}', category_status = '${fromcontroller.category_status}' WHERE category_id = '${fromcontroller.category_id}' `;
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
                 messsage:"CATEGORY UPDATED SUCCESSFULLY"
             }
             tocontroller(null, data);
         }else{
             var data = {
                 status:"10",
                 messsage:"Erroe while Updating the category"
             }
             tocontroller(null, data);
         }
     });
 }

 categorymodel.deletefunction = (fromcontroller, tocontroller) =>{
 
    var sql = `DELETE FROM category_tbl  WHERE category_id = '${fromcontroller.category_id}'`;
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
                 messsage:"DELETED THE CATEGORY"
             }
             tocontroller(null, data);
         }else{
             var data = {
                 status:"10",
                 messsage:"Erroe while Deleting the category"
             }
             tocontroller(null, data);
         }
     });
 }

 module.exports=categorymodel;
