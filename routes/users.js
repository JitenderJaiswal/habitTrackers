const express=require('express');
const router=express.Router(); 
const usersController=require('../controllers/users_controller');

router.get('/create',usersController.create);
router.get('/update/:id&:newstatus',usersController.update);
router.get('/find',usersController.find);
router.get('/detail',usersController.detail);
router.get('/delete/:habit',usersController.delete);

module.exports=router;