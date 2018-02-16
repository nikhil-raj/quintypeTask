var score=64;
var array=[];
var markedArray=[];
var attemptArray=[];

    var txt="";
    var counter=1;
    for(i=0;i<8;i++){
        for(j=0;j<8;j++){
                txt+="<div class='box' id='"+counter+"' onclick='match("+counter+")'><img id='img"+counter+"' src='images/ques.jpg' height='100%' width='100%'></div>";
                counter+=1;
        }
        txt+="<br>"
    }
    document.getElementById("gameContainer").innerHTML+=txt;
    while(array.length < 8){
        var random = Math.floor(Math.random()*64) + 1;
        if(array.indexOf(random) > -1) continue;
        array[array.length] = random;
    }
    for(i in array){
        document.getElementById(array[i]).style.background="url('images/diamond.png')";
        document.getElementById(array[i]).style.backgroundColor="red";
        document.getElementById(array[i]).style.backgroundSize="cover";
        document.getElementById(array[i]).style.backgroundRepeat="no-repeat";
        
    }
    

  function match(id){
        if(attemptArray.indexOf(id)== -1) {
            attemptArray.push(id);
            score-=1;
        }
        if(markedArray.indexOf(id)== -1) {
            if(document.getElementById(id).style.backgroundColor=="red"){
                markedArray.push(id);
                document.getElementById("img"+id).style.visibility="hidden";
            }else{
                
                for(i in attemptArray){
                    document.getElementById(attemptArray[i]).innerHTML="<img id='img"+attemptArray[i]+"' src='images/white.png' height='100%' width='100%'>";
                }
                for(i in markedArray){
                    document.getElementById(markedArray[i]).innerHTML="<img id='img"+attemptArray[i]+"' src='images/diamond.png' height='100%' width='100%'>";
                }
                var result=10;
                var closeDirection="";
                for(i=1;i<8;i++){
                        if(id%8==0){
                            break;
                        }
                        if((document.getElementById(id+i).style.backgroundColor=="red") && markedArray.indexOf(id+i)== -1){ 
                                if(i<result){
                                    result=i;
                                    closeDirection="R";
                                }
                               
                        }   
                        if((id+i)%8==0){
                            break;
                        }
                }
                for(i=1;i<8;i++){
                    if(id%8==1){
                        break;
                    }
                   
                    if((document.getElementById(id-i).style.backgroundColor=="red") && markedArray.indexOf(id-i)== -1){ 
                            if(i<result){
                                result=i;
                                closeDirection="L";
                            }
                           
                    }   
                    if((id-i)%8==1){
                        break;
                    }
                }
                for(i=1;i<8;i++){
                   
                    if(Math.floor(id/8)==7 || (id/8)==8){
                        break;
                    }
                    if((document.getElementById(id+(i*8)).style.backgroundColor=="red") && markedArray.indexOf(id+(i*8))== -1){
                        console.log("Here");
                            if(i<result){
                                result=i;
                                closeDirection="B";
                            }
                           
                    }
                    if(Math.floor((id+(i*8))/8)==7 || ((id+(i*8))/8)==8){
                        break;
                    }
                }
                for(i=1;i<8;i++){
                    if(Math.floor(id/8)==0 || (id/8)==1){
                        break;
                    }
                    if((document.getElementById(id-(i*8)).style.backgroundColor=="red") && markedArray.indexOf(id-(i*8))== -1){
                            if(i<result){
                                result=i;
                                closeDirection="T";
                            }
                           
                    }
                    if(Math.floor((id-(i*8))/8)==0 || ((id-(i*8))/8)==1){
                        break;
                    }
                }
                console.log(closeDirection)
                if(closeDirection=="R"){
                    document.getElementById(id).innerHTML='<img src="images/right.jpg" width="100%" height="100%">'; 
                }else if(closeDirection=="L"){
                    document.getElementById(id).innerHTML='<img src="images/left.jpg" width="100%" height="100%">'; 
                }else if(closeDirection=="T"){
                    document.getElementById(id).innerHTML='<img src="images/up.png" width="100%" height="100%">'; 
                }else if(closeDirection=="B"){
                    document.getElementById(id).innerHTML='<img src="images/down.png" width="100%" height="100%">'; 
                }
                
                
            }
        }
        if(markedArray.length==8){
            document.getElementById("scoreCount").innerHTML=score;
            document.getElementById("endGame").style.display="block";
        }
  }
  