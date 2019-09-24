const express = require('express'); 

const { isLoggedIn } =require('./middlewares'); 
const { User } =require('../models'); 

const router = express.Router(); 

router.post('/:id/follow',isLoggedIn, async (req,res,next)=>{


try{

    const user = await User.find({where:{userid:req.user.userid}}); 
    await user.addFo

}catch(error){

}

});