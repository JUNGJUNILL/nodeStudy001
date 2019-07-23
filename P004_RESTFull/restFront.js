

//const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const getUser = ()=>{

    let xhr = new XMLHttpRequest(); 
    xhr.onload =()=>{

        if(xhr.status === 200){

                console.log('xhr.status --> : ' , xhr.status);    

            let users = JSON.parse(xhr.responseText); 
            let list = document.getElementById('list');
            list.innerHTML=''; 

            Object.keys(users).map((key)=>{

                let userDiv = document.createElement('div'); 
                let span = document.createElement('span'); 
                span.textContent = users[key]; 
//--------------------------------------------------------------수정버튼 생성 로직
                let edit = document.createElement('button'); 
                edit.textContent = '수정'; 

                edit.addEventListener('click',()=>{

                    let name = prompt('바꿀 이름을 입력하세요'); 

                    if(!name){
                        return alert('이름을 반드시 입력해야 합니다.'); 
                    }

                    let xhr = new XMLHttpRequest(); 
                    xhr.onload = ()=>{

                        if(xhr.status === 200){
                            console.log('수정 버튼 클릭 시 :  ' , xhr.responseText); 
                            getUser();
                        }else{
                            console.error('수정 버튼 에러 :  ' , xhr.responseText); 
                        }
                    }; //end of on load

                    xhr.open('PUT','/users/'+key);
                    xhr.setRequestHeader('Content-Type','application/json'); 
                    xhr.send(JSON.stringify({name : name})); 


                });//end of addEventListener()
//--------------------------------------------------------------수정버튼 생성 로직 끝


//--------------------------------------------------------------삭제버튼 생성 로직
                let remove = document.createElement('button'); 
                remove.textContent='삭제'; 
                remove.addEventListener('click',()=>{

                    var xhr = new XMLHttpRequest(); 
                    xhr.onload = ()=>{

                        if(xhr.status === 200){
                            console.log(xhr.responseText); 
                            getUser();
                        }else{
                            console.error(xhr.responseText);
                        }
                    }; //end of onload
                    xhr.open('DELETE','/users/'+key); 
                    xhr.send(); 
                });//end of addEventListener()

//--------------------------------------------------------------삭제버튼 생성 로직 끝

                userDiv.appendChild(span); 
                userDiv.appendChild(edit); 
                userDiv.appendChild(remove); 
                list.appendChild(userDiv); 
                
                

            });//end of map()
        }else{
            console.error('최초 요청 실패 했을 경우 :  ' ,xhr.responseText);
        }

    };//end of onload

    xhr.open('GET','/users'); 
    xhr.send(); 

}


getUser(); 

document.getElementById('form').addEventListener('submit',(e)=>{

    e.preventDefault(); 
    let name  = e.target.userName.value;
    if(!name){

        return alert('이름을 입력 하세요');
    }

    let xhr = new XMLHttpRequest(); 
    xhr.onload = ()=>{

        if(xhr.status === 201){

            console.log(xhr.responseText); 
            getUser();
        
        }else{

            console.error(xhr.responseText); 

        }
    }

    xhr.open('POST','/users'); 
    xhr.setRequestHeader('Content-Type','application/json'); 
    xhr.send(JSON.stringify({name : name})); 
    e.target.userName.value=''

});