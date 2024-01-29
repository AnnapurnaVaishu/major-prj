const ProductModel = require('../model/product.model.js');
const BrandModel = require('../model/product.model.js');

//Add product

exports.addproduct = (req, res)=>{

    if (Object.keys(req.body).length === 0) {
        res.json({
          status: 0,
          message: "Content can not be empty!",
        });
      }else{
        const modelclass = new ProductModel({
            product_id:req.body.product_id,
            product_name:req.body.product_name,
            product_status:req.body.product_status,
            CATEGORY_ID:req.body.CATEGORY_ID

        });

        ProductModel.addproductfunction(modelclass,(err, data)=>{
            if(err){
                res.json({
                    status: 10,
                    message: err,
                  }); 
            }else if(data['status'] == 1){
                res.json({
                    status: 200,
                    message: data,
                  }); 
            }else{
                res.json({
                    status: 400,
                    message: data,
                  }); 
            }
        })
      }
}

//update product

exports.updateproduct = (req, res)=>{
  if (Object.keys(req.body).length === 0) {
      res.json({
        status: 0,
        message: "Content can not be empty!",
      });
    }else{
      var modelclass = new ProductModel({
        product_id:req.body.product_id,
        product_name:req.body.product_name,
        product_status:req.body.product_status,
        CATEGORY_ID:req.body.CATEGORY_ID
      });

      ProductModel.productupdatefunction(modelclass,(err, data)=>{
          if(err){
              res.json({
                  status: 10,
                  message: err,
                }); 
          }else if(data['status'] == 1){
              res.json({
                  status: 200,
                  message: data,
                }); 
          }else{
              res.json({
                  status: 400,
                  message: data,
                }); 
          }
      })
    }
}

//add brand

exports.addbrand = (req, res)=>{

    if (Object.keys(req.body).length === 0) {
        res.json({
          status: 0,
          message: "Content can not be empty!",
        });
      }else{
        const modelclass = new BrandModel({
            brand_id:req.body.brand_id,
            brand_name:req.body.brand_name,
            brand_status:req.body.brand_status
        });

        BrandModel.addbrandfunction(modelclass,(err, data)=>{
            if(err){
                res.json({
                    status: 10,
                    message: err,
                  }); 
            }else if(data['status'] == 1){
                res.json({
                    status: 200,
                    message: data,
                  }); 
            }else{
                res.json({
                    status: 400,
                    message: data,
                  }); 
            }
        })
      }
}
