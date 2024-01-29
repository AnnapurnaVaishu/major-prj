const db = require('../db/db.js');

const autchmodel = function(autchmodel){
    this.ID = autchmodel.ID;
    this.USER_NAME = autchmodel.USER_NAME;
    this.PASSWORD = autchmodel.PASSWORD;
    this.USER_CODE = autchmodel.USER_CODE;
    this.USER_DOB = autchmodel.USER_DOB;
    this.USER_DOJ = autchmodel.USER_DOJ;
    this.USER_PH_NO = autchmodel.USER_PH_NO;
    this.USER_TYPE = autchmodel.USER_TYPE;
    this.GENDER = autchmodel.GENDER;
    this.USER_AADHAR_CARD = autchmodel.USER_AADHAR_CARD;
    this.USER_STATUS = autchmodel.USER_STATUS;
    this.CREATED_ON = autchmodel.CREATED_ON;
    this.UPDATED_ON = autchmodel.UPDATED_ON;
}

// REGISTER

autchmodel.registerfunction = (fromcontroller, tocontroller) => {
    var sql = `INSERT INTO tbl_users(ID, USER_NAME, PASSWORD, USER_CODE, USER_DOB,USER_DOJ,
        USER_PH_NO, USER_TYPE, GENDER, USER_AADHAR_CARD, USER_STATUS, CREATED_ON, UPDATED_ON) VALUES ('${fromcontroller.ID}', 
        '${fromcontroller.USER_NAME}', '${fromcontroller.PASSWORD}', '${fromcontroller.USER_CODE}', '${fromcontroller.USER_DOB}', '${fromcontroller.USER_DOJ}', '${fromcontroller.USER_PH_NO}',
        '${fromcontroller.USER_TYPE}', '${fromcontroller.GENDER}', '${fromcontroller.USER_AADHAR_CARD}', '${fromcontroller.USER_STATUS}', '${fromcontroller.CREATED_ON}', '${fromcontroller.UPDATED_ON}')`;
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
                messsage:"Registered Successfully"
            }
            tocontroller(null, data);
        }else{
            var data = {
                status:"10",
                messsage:"Failed to Register"
            }
            tocontroller(null, data);
        }
    });  
}

//LOGIN

autchmodel.loginfunction = (fromcontroller, tocontroller) => {
    var sql = `SELECT  * FROM tbl_users WHERE USER_NAME = '${fromcontroller.USER_NAME}' AND PASSWORD = '${fromcontroller.PASSWORD}'`;
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
                messsage:"Logged In  Successfully"
            }
            tocontroller(null, data);
        }else{
            var data = {
                status:"10",
                messsage:"Failed to Login"
            }
            tocontroller(null, data);
        }
    });  
}
      
// getting all users list

autchmodel.getusersfunction = (fromcontroller, tocontroller) => {
    var sql = `SELECT * FROM tbl_users`;
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
                messsage:"GOTTEN ALL USERS Successfully",
                result: res
            }
            tocontroller(null, data);
        }else{
            var data = {
                status:"10",
                messsage:"Failed to GET"
            }
            tocontroller(null, data);
        }
    });  
}

//update users

autchmodel.updateusersfunction = (fromcontroller, tocontroller) =>{
 
    var sql = `UPDATE tbl_users SET USER_DOB = '${fromcontroller.USER_DOB}', USER_NAME = '${fromcontroller.USER_NAME}', PASSWORD = '${fromcontroller.PASSWORD}', USER_CODE = '${fromcontroller.USER_CODE}',
    USER_DOJ = '${fromcontroller.USER_DOJ}', USER_PH_NO = '${fromcontroller.USER_PH_NO}', USER_TYPE = '${fromcontroller.USER_TYPE}', GENDER = '${fromcontroller.GENDER}',
    USER_AADHAR_CARD = '${fromcontroller.USER_AADHAR_CARD}', USER_STATUS = '${fromcontroller.USER_STATUS}', CREATED_ON = '${fromcontroller.CREATED_ON}', UPDATED_ON = '${fromcontroller.UPDATED_ON}' WHERE ID = '${fromcontroller.ID}' `;
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
                 messsage:"USER UPDATED SUCCESSFULLY"
             }
             tocontroller(null, data);
         }else{
             var data = {
                 status:"10",
                 messsage:"Erroe while Updating the data"
             }
             tocontroller(null, data);
         }
     });
 }

 //delete users

 autchmodel.deleteuserfunction = (fromcontroller, tocontroller) =>{
 
    var sql = `DELETE FROM tbl_users  WHERE ID = '${fromcontroller.ID}'`;
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
                 messsage:"DELETED THE USER"
             }
             tocontroller(null, data);
         }else{
             var data = {
                 status:"10",
                 messsage:"Erroe while Deleting the user"
             }
             tocontroller(null, data);
         }
     });
 }

module.exports=autchmodel;
















































