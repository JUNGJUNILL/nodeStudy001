//2,2가 반드시 출구이어야 한다. 



const PATHWAY_COLOR =0; //지나다닐 수 있는 길  
const WALL_COLOR =1;    //벽
const BLOCKED_COLOR =2; //방문해봤지만 그쪽으론 길이 없는 경우 
const PATH_COLOR =3;    //방문해 봤지만 출구인지 아닌지 아직 모름 
const N = 3;            



const maze  = [[0,0,1],
                [0,1,0],
                [0,0,0]
			   ]; 

const findMazePath = (x,y)=>{

        if(x < 0 || y < 0 || x >= N || y >= N){//미로를 벗어난 수 인 경우 
            return false; 
        }else if(maze[x][y] !== PATHWAY_COLOR){//벽이거나, 이미 도달한 적이 있거나, 
            return false; 
        }else if(x === N-1 && y === N-1){ //출구를 발견한 경우 
            maze[x][y] = PATH_COLOR; //과자 부스러기 
            return true; 
        }else{
            maze[x][y] = PATH_COLOR; //과자 부스러기
            if(findMazePath(x-1,y)|| // 좌
                findMazePath(x,y+1)||// 상
                findMazePath(x+1,y)||// 우
                findMazePath(x,y-1)  // 하
            ){
                return true; 
            }

            maze[x][y] = BLOCKED_COLOR; //벽인 경우 
            return false; 
        }
}

const result  = findMazePath(0,0); 
console.log('result=>' , result); 
/*
findMazePath(0,0) 

①미로는 벗어난 경우의 수 
②벽이거나, 이미 도달한 적이 있거나 
③출구를 발견한 경우 
④해당 경로에 흔적을 남긴후 상하좌우 다시 탐색 , 벽인 경우 탐색 

①false 
②false 
③false 
④maze[0][0] = 3 
    ★
    (-1,0)  false
	
	★
	(0,1)
		①false 
		②false 
		③false 
		④maze[0][1] =3 
		   (-1,1)  => false 범위를 벗어남
		   (0,2)   => false 벽 인 경우 
		   (1,1)   => false 벽 인 경우 
		   (0,0)   => false 이미 도달 한 경우 
		
		
	★	--이 부분에서 출구가 있음을 확인하였다. 
	(1,0)
		①false
	    ②false 
	    ③false 
	    ④maze[1][0] = 3 
		    (0,0) => false
			(1,1) => false
			(2,0)
				①false 
			    ②false 
			    ③false 
			    ④maze[2][0] = 3 
				   (1,0)   =>false 이미 도달한 경우
				   (2,1)   
						①false
				        ②false 
				        ③false 
				        ④maze[2][1] = 3
						   (1,1) => false 벽 인 경우 
						   (2,2) => true 출구를 발견한 경우 
						   (3,1) => false 미로의 경로를 벗어난 경우 
						   (2,0) => false 이미 도달한 경우 
						   
							
						
				   (3,0)   =>false 
				   (2,-1)  =>false
				
			(1,0) => false 
	
	
	★
	(0,-1)  false

*/

