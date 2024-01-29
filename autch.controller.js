const AUTCHModel = require('../model/autch.model.js');

//REGISTER

exports.registerdata = (req, res)=>{

    if (Object.keys(req.body).length === 0) {
        res.json({
          status: 0,
          message: "Content can not be empty!",
        });
      }else{
        const modelclass = new AUTCHModel({
            ID:req.body.ID,
            USER_NAME:req.body.USER_NAME,
            PASSWORD:req.body.PASSWORD,
            USER_CODE:req.body.USER_CODE,
            USER_DOB:req.body.USER_DOB,
            USER_DOJ:req.body.USER_DOJ,
            USER_PH_NO:req.body.USER_PH_NO,
            USER_TYPE:req.body.USER_TYPE,
            GENDER:req.body.GENDER,
            USER_AADHAR_CARD:req.body.USER_AADHAR_CARD,
            USER_STATUS:req.body.USER_STATUS,
            CREATED_ON:req.body.CREATED_ON,
            UPDATED_ON:req.body.UPDATED_ON
        });

        AUTCHModel.registerfunction(modelclass,(err, data)=>{
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

//LOGIN

exports.logindata = (req, res)=>{

  if (Object.keys(req.body).length === 0) {
      res.json({
        status: 0,
        message: "Content can not be empty!",
      });
    }else{
      const modelclass = new AUTCHModel({
          USER_NAME:req.body.USER_NAME,
          PASSWORD:req.body.PASSWORD,
      });

      AUTCHModel.loginfunction(modelclass,(err, data)=>{
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

exports.getdata = (req, res)=>{
  AUTCHModel.getusersfunction(null,(err, data)=>{
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

exports.updatedata = (req, res)=>{
  if (Object.keys(req.body).length === 0) {
      res.json({
        status: 0,
        message: "Content can not be empty!",
      });
    }else{
      var modelclass = new AUTCHModel({
        ID:req.body.ID,
        USER_NAME:req.body.USER_NAME,
        PASSWORD:req.body.PASSWORD,
        USER_CODE:req.body.USER_CODE,
        USER_DOB:req.body.USER_DOB,
        USER_DOJ:req.body.USER_DOJ,
        USER_PH_NO:req.body.USER_PH_NO,
        USER_TYPE:req.body.USER_TYPE,
        GENDER:req.body.GENDER,
        USER_AADHAR_CARD:req.body.USER_AADHAR_CARD,
        USER_STATUS:req.body.USER_STATUS,
        CREATED_ON:req.body.CREATED_ON,
        UPDATED_ON:req.body.UPDATED_ON
      });

      AUTCHModel.updateusersfunction(modelclass,(err, data)=>{
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

exports.deletedata = (req, res)=>{
  if (Object.keys(req.body).length === 0) {
      res.json({
        status: 0,
        message: "Content can not be empty!",
      });
    }else{
      var modelclass = new AUTCHModel({
          id:req.body.id,
          
      });

      AUTCHModel.deleteuserfunction(modelclass,(err, data)=>{
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