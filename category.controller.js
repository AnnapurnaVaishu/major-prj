const CategoryModel = require('../model/category.model.js');

//Add category

exports.addcategory = (req, res)=>{

    if (Object.keys(req.body).length === 0) {
        res.json({
          status: 0,
          message: "Content can not be empty!",
        });
      }else{
        const modelclass = new CategoryModel({
            category_id:req.body.category_id,
            category_name:req.body.category_name,
            category_status:req.body.category_status
        });

        CategoryModel.addfunction(modelclass,(err, data)=>{
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

//edit category

exports.edit_updatedata = (req, res)=>{
  if (Object.keys(req.body).length === 0) {
    res.json({
      status: 0,
      message: "Content can not be empty!",
    });
  }else{
    var modelclass = new CategoryModel({
      category_id:req.body.category_id,
      category_name:req.body.category_name,
      category_status:req.body.category_status
    });

    CategoryModel.updatefunction(modelclass,(err, data)=>{
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

exports.edit_deletedata = (req, res)=>{
  if (Object.keys(req.body).length === 0) {
      res.json({
        status: 0,
        message: "Content can not be empty!",
      });
    }else{
      var modelclass = new CategoryModel({
          category_id:req.body.category_id,
          
      });

      CategoryModel.deletefunction(modelclass,(err, data)=>{
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