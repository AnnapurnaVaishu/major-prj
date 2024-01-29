const db = require('../db/db.js');

const itemmodel = function(itemmodel){
    this.item_id = itemmodel.item_id;
    this.item_name = itemmodel.item_name;
    this.item_status = itemmodel.item_status;
}

// REGISTER

itemmodel.additemfunction = (fromcontroller, tocontroller) => {
    var sql = `INSERT INTO item_tbl(item_id, item_name, item_status) VALUES ('${fromcontroller.item_id}', 
        '${fromcontroller.item_name}', '${fromcontroller.item_status}')`;
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
                messsage:"ITEM ADDED Successfully"
            }
            tocontroller(null, data);
        }else{
            var data = {
                status:"10",
                messsage:"Failed to Add Item"
            }
            tocontroller(null, data);
        }
    });  
}

      
// getting all users list

itemmodel.getitemfunction = (fromcontroller, tocontroller) => {
    var sql = `SELECT * FROM item_tbl`;
    db.query(sql, (err, res)=>{
        console.log(res);
        if(err){
            var data = {
                status:"100",
                messsage:"DB query error"
            }
            tocontroller(null, data);
        }else if (res.length>0){
            var data = {
                status:"1",
                messsage:"GOTTEN ALL ITEM Successfully",
                result: res
            }
            tocontroller(null, data);
        }else{
            var data = {
                status:"10",
                messsage:"Failed to GET AN ITEM"
            }
            tocontroller(null, data);
        }
    });  
}

//update users

itemmodel.updateitemfunction = (fromcontroller, tocontroller) =>{
 
    var sql = `UPDATE item_tbl SET item_name = '${fromcontroller.item_id}', item_status = '${fromcontroller.item_status}' WHERE item_id = '${fromcontroller.item_id}' `;
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
                 messsage:"ITEM UPDATED SUCCESSFULLY"
             }
             tocontroller(null, data);
         }else{
             var data = {
                 status:"10",
                 messsage:"Erroe while Updating the item"
             }
             tocontroller(null, data);
         }
     });
 }

 //delete users

 itemmodel.deleteitemfunction = (fromcontroller, tocontroller) =>{
 
    var sql = `DELETE FROM item_tbl  WHERE item_id = '${fromcontroller.item_id}'`;
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
                 messsage:"DELETED THE ITEM"
             }
             tocontroller(null, data);
         }else{
             var data = {
                 status:"10",
                 messsage:"Erroe while Deleting the item"
             }
             tocontroller(null, data);
         }
     });
 }

module.exports=itemmodel;
















































