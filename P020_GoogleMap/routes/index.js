const express=require('express'); 
const uutil = require('util'); 
const gooogleMaps = require('@google/maps'); 

const History = require('../schemas/history'); 


const router = express.Router(); 

//-------------------------------------------------------------
//@google/maps 패키지로부터 구글 지도 클라이언트를 만드는 방법입니다.
//createClient 메서드에 키 할당 해 주면 된다. 

//생성된 클라이언트에는 places, placesQueryAutoComplete,placeNearBy 등의 메서드가 들어있다. 
const googleMapsClient = gooogleMaps.createClient({
    key:process.env.PLACES_API_KEY
}); 
//-------------------------------------------------------------


router.get('/',(req,res)=>{
    res.render('index'); 
}); 



//-------------------------------------------------------------
//자동완성 라우터,
//콜백 방식으로 작동하고 결과는 response.json.predictions에 담겨 있으며,
//예상 검색어는 5개까지 반환한다. 
router.get('/autocomplete/:query',(req,res,next)=>{

    googleMapsClient.placesQueryAutoComplete({
    input:req.params.query,
    language:'ko',
    },(err,response)=>{
        if(err){
            return next(err); 
        }

        return res.json(response.json.predictions);
    });

}); 
//-------------------------------------------------------------


router.get('/search/:query',async(req,res,next)=>{

    const googlePlaces = uutil.promisify(googleMapsClient.places); 
    
    //해당 함수를 promise화 시킴

    try{
        const history = new History({query:req.params.query}); 
        await history.save(); 

        const response = await googlePlaces({
            query:req.params.query,
            language:'ko',
        });

        res.render('result',{
            title:`${req.params.query} 검색 성공`,
            results:response.json.results,
            query:req.params.query,
        });

    }catch(error){
        console.error(error); 
        next(error); 
    }

});

module.exports = router;