const ItemModel = require('../model/item.model.js');

//Add Item

exports.additem = (req, res)=>{

    if (Object.keys(req.body).length === 0) {
        res.json({
          status: 0,
          message: "Content can not be empty!",
        });
      }else{
        const modelclass = new ItemModel({
            item_id:req.body.item_id,
            item_name:req.body.item_name,
            item_status:req.body.item_status
        });

        ItemModel.additemfunction(modelclass,(err, data)=>{
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



// GET ALL USERS

exports.getitem = (req, res)=>{
    ItemModel.getitemfunction(null,(err, data)=>{
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

//update users

exports.updateitem = (req, res)=>{
  if (Object.keys(req.body).length === 0) {
      res.json({
        status: 0,
        message: "Content can not be empty!",
      });
    }else{
      var modelclass = new ItemModel({
        item_id:req.body.item_id,
        item_name:req.body.item_name,
        item_status:req.body.item_status
      });

      ItemModel.updateitemfunction(modelclass,(err, data)=>{
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

//delete users

exports.deleteitem = (req, res)=>{
  if (Object.keys(req.body).length === 0) {
      res.json({
        status: 0,
        message: "Content can not be empty!",
      });
    }else{
      var modelclass = new ItemModel({
          item_id:req.body.item_id,
          
      });

      ItemModel.deleteitemfunction(modelclass,(err, data)=>{
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