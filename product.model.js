const db = require('../db/db.js');

const productmodel = function(productmodel){
    this.product_id = productmodel.product_id;
    this.product_name = productmodel.product_name;
    this.product_status = productmodel.product_status; 
    this.CATEGORY_ID = productmodel.CATEGORY_ID;  
 
}

const brandmodel = function(brandmodel){
    this.brand_id = brandmodel.brand_id;
    this.brand_name = brandmodel.brand_name;
    this.brand_status = brandmodel.brand_status;  
}

// Adding a product

productmodel.addproductfunction = (fromcontroller, tocontroller) => {
    var sql = `INSERT INTO product_tbl (product_id, product_name, product_status,CATEGORY_ID) VALUES ('${fromcontroller.product_id}', 
        '${fromcontroller.product_name}', '${fromcontroller.product_status}' '${fromcontroller.CATEGORY_ID}')`;
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
                messsage:"Successfully Added A PRODUCT"
            }
            tocontroller(null, data);
        }else{
            var data = {
                status:"10",
                messsage:"Failed to Add a product"
            }
            tocontroller(null, data);
        }
    });  
}

//update product

productmodel.productupdatefunction = (fromcontroller, tocontroller) =>{
 
    var sql = `UPDATE product_tbl SET product_name = '${fromcontroller.product_name}', product_status = '${fromcontroller.product_status}',
    CATEGORY_ID = '${fromcontroller.CATEGORY_ID}'  WHERE product_id = '${fromcontroller.product_id}' `;
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
                 messsage:"PRODUCT UPDATED SUCCESSFULLY"
             }
             tocontroller(null, data);
         }else{
             var data = {
                 status:"10",
                 messsage:"Erroe while Updating the product"
             }
             tocontroller(null, data);
         }
     });
 }

// Adding a brand

brandmodel.addbrandfunction = (fromcontroller, tocontroller) => {
    var sql = `INSERT INTO brand_tbl (brand_id, brand_name, brand_status) VALUES ('${fromcontroller.brand_id}', 
        '${fromcontroller.brand_name}', '${fromcontroller.brand_status}')`;
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
                messsage:"Successfully Added A BRAND"
            }
            tocontroller(null, data);
        }else{
            var data = {
                status:"10",
                messsage:"Failed to Add a brand"
            }
            tocontroller(null, data);
        }
    });  
}


module.exports=productmodel;
module.exports=brandmodel;
