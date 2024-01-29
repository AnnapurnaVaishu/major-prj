module.exports = app => {
    const autchController = require('../controller/autch.controller');
    const categorycontroller = require('../controller/category.controller');
    const subcategorycontroller = require('../controller/subcategorylist.controller');
    const productcontroller = require('../controller/product.controller');
    const itemController = require('../controller/item.controller');

    
    var router = require("express").Router();
    
    //autch model

    router.post('/register', autchController.registerdata);
    router.post('/login', autchController.logindata);
    router.get('/getdata',autchController.getdata );
    router.post('/updatedata', autchController.updatedata);
    router.post('/deletedata',autchController.deletedata);

    //category model
    router.post('/addcategory', categorycontroller.addcategory);
    router.post('/edit_updatedata', categorycontroller.edit_updatedata);
    router.post('/edit_deletedata',categorycontroller.edit_deletedata);

    //sub category model
    router.post('/addsubcategory', subcategorycontroller.addsubcategory);
    router.post('/edit_updatedata', subcategorycontroller.edit_updatedata);
    router.post('/edit_deletedata',subcategorycontroller.edit_deletedata);

    //product model
    router.post('/addproduct', productcontroller.addproduct);
    router.post('/addbrand', productcontroller.addbrand);
    router.post('/updateproduct', productcontroller.updateproduct);


    //item module
    router.post('/additem', itemController.additem);
    router.get('/getitem',itemController.getitem );
    router.post('/updateitem', itemController.updateitem);
    router.post('/deleteitem',itemController.deleteitem);

    app.use('/api/autch', router);
    
};    