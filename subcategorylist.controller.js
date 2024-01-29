const subcategoryModel = require('../model/subcategorylist.model.js');

//Add category

exports.addsubcategory = (req, res)=>{

    if (Object.keys(req.body).length === 0) {
        res.json({
          status: 0,
          message: "Content can not be empty!",
        });
      }else{
        const modelclass = new subcategoryModel({
            subcategory_id:req.body.subcategory_id,
            subcategory_name:req.body.subcategory_name,
            subcategory_status:req.body.subcategory_status
        });

        subcategoryModel.addfunction(modelclass,(err, data)=>{
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
    var modelclass = new subcategoryModel({
        subcategory_id:req.body.subcategory_id,
        subcategory_name:req.body.subcategory_name,
        subcategory_status:req.body.subcategory_status
    });

    subcategoryModel.updatefunction(modelclass,(err, data)=>{
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
      var modelclass = new subcategoryModel({
        subcategory_id:req.body.subcategory_id
          
      });

      subcategoryModel.deletefunction(modelclass,(err, data)=>{
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