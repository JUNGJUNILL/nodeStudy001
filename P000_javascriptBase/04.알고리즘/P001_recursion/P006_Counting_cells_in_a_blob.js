const image =[  [1,0,0,0,0,0,0,1],
                [0,1,1,0,0,1,0,0],
                [1,1,0,0,1,0,1,0],
                [0,0,0,0,0,1,0,0],
                [0,1,0,1,0,1,0,0],
                [0,1,0,1,0,1,0,0],
                [1,0,0,0,1,0,0,1],
                [0,1,1,0,0,1,1,1]
            ]; 

const BACKGROUND_COLOR= 0; 
const IMAGE_COLOR =1;
const ALREADY_COUNTED =2; 
const N =8; 


const countCells = (x,y)=>{
    if(x<0 || y<0 || x>=N || y>=N){
        return 0; 

    }else if(image[x][y] !== IMAGE_COLOR){
        return 0; 
    }else{
        image[x][y]  = ALREADY_COUNTED; 
        return 1+countCells(x-1,y+1) +countCells(x,y+1)+countCells(x+1,y+1)+countCells(x-1,y)+          
        countCells(x+1,y) +countCells(x-1,y-1)+countCells(x,y-1)+countCells(x+1,y-1);   
                                                                                        
    }

}
    console.log(countCells(0,0)); 
/*
기보서..
(0,0) = 2
1+

(-1 1 = 0)
(0 1  = 0)

★ (1,1) = 2
(1 1 = 0+2+0+0+1+0+0+1) 
	[0 2 = 0]
	★ (1,2) = 2 
	[1 2 = 1+1]
			0 3 = 0 
			1 3 = 0
			2 3 = 0
			0 2 = 0
			-----------------
			2 2 = 0
			0 1 = 0
			★ (1,1) = 2 
			1 1 = 1
					0 2 = 0
					1 2 = 0
					2 2 = 0
					0 1 = 0
					-----------------
					2 1 = 0
					0 0 = 0
					1 0 = 0
					2 0 = 0
			2 1 = 0 

		
	[2 2 = 0]
	[0 1 = 0]
	-----------------
	★ (2,1) = 2
	[2 1 = 1 ]
			1 2 = 0
			2 2 = 0
			3 2 = 0
			1 1 = 0 
			-----------------
			3 1 = 0
			1 0 = 0
			2 0 = 0
			3 0 = 0 

	[0 0 = 0]
	[1 0 = 0]
	★ (2,0) = 2
	[2 0 = 1 ]
						1 1 = 0
						2 1 = 0
						3 1 = 0 
						1 0 = 0
						-----------------
						3 0 = 0
						1 -1 = 0
						2 -1 = 0
						3 -1 = 0

	

(-1 0 = 0)
-----------------

(1 0   = 0  )
(-1 -1 = 0 )
(0 -1  =0  )
(1 -1 = 0  )



    
*/


/*
const func = (x,y)=>{

console.log(x-1,y+1);
console.log(x,y+1);
console.log(x+1,y+1);
console.log(x-1,y);
console.log('-----------------')
console.log(x+1,y);
console.log(x-1,y-1);
console.log(x,y-1);
console.log(x+1,y-1);

}



*/