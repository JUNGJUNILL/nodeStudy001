const express = require('express'); 

const { isLoggedIn } =require('./middlewares'); 
const { User } =require('../models'); 

const router = express.Router(); 

router.post('/:id/follow',isLoggedIn, async (req,res,next)=>{


try{

    const user = await User.findOne({where:{userid:req.user.id}}); 
    await user.addFollwing(parseInt(req.params.id,10)); 
    res.send('success'); 

}catch(error){
    
    console.error(error); 
    next(error); 

}

});

module.exports = router; 