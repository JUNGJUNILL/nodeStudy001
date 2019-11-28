const express = require('express'); 
const multer = require('multer'); 
const path   = require('path'); 
const fs     = require('fs'); 


const {Good, Auction, User} = require('../models'); 
const {isLoggedIn,isNotLoggedIn} = require('../passport'); 


const router = express.Router(); 


router.use((req,res)=>{

    res.locals.user = req.user; 
    next(); 
}); 


router.get('/', async (req,res,ext)=>{

    try{
        const goods = await Good.findAll({where:{soldId:null}}); 
        


    }catch(error){
        console.error(error); 
        next(error);
    }



}); 