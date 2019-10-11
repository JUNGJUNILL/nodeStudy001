const express =require('express'); 
const uuidv4 = require('uuid/v4'); 
const {User , Domain} = require('../models'); 

const router = express.Router(); 






router.get('/',(req,res,next)=>{

        User.findOne({
        where: { id: req.user && req.user.id || null },
        include:{model: Domain},  //User, Domain과 조인 걸겠다. 
    }).then((user)=>{
        console.log('@@@user@@@ ==>' + user); 
        res.render('login',{
            user,
            loginError:req.flash('loginError'), 
            domains: user && user.domains
        });
    }).catch((error)=>{

    next(error);

    });
}); 


router.post('/domain',(req,res,next)=>{

    console.log('req.user.id=> ===>' , req.user.id);

    Domain.create({

        userId:req.user.id, 
        host:req.body.host, 
        type:req.body.type,
        clientSecret:uuidv4(), 
        
    }).then(()=>{
        res.redirect('/'); 
    }).catch((error)=>{
        next(error); 
    }); 

});

module.exports = router; 