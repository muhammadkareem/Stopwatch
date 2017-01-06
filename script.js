var mint = 0;
var sec = 0;
var milsec = 0;
var fulltime;
function count() {
  milsec++;
    
    if(milsec <= 100){
            
            if( milsec === 99 ){
                milsec = 0;
                sec++;
                    
                    if( sec === 30){
                        sec = 0;
                        mint++;
                                     
                            
                    }
            }
         
    }
    else {
        miliSeconds = 0;
       
    }
    
    document.getElementById("div1").innerHTML= mint + ":" + sec + ":" + milsec;
}

function start() {
fulltime = setInterval(count,10);
}

function reset() {
    clearInterval(fulltime);
 document.getElementById("div1").innerHTML= 00 + ":" + 00 + ":" + 00;
 milsec = 0;
 sec = 0;
 mint = 0;
}

function pause() {
    clearTimeout(fulltime);
}




