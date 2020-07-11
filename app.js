var min=0;
var sec=0;
var msec=0;
var hsec=document.getElementById('sec');
var hmin=document.getElementById('min');
var hmsec=document.getElementById('msec');


function timer(){

    msec++;
    hmsec.innerHTML=msec;

    if(msec>=100){
        sec++
        
        if(sec>9){

            hsec.innerHTML=sec+":"

        }else{

            hsec.innerHTML="0"+sec+":";
        }

        msec=0;
        
    }

    if(sec>=60){
        min++;
        
        if(min>9){
       
            hmin.innerHTML=min+":";
       
        }else{

            hmin.innerHTML="0"+min+":";
        }
        sec=0;
    }
}

var interval;
var flag=true;

function start(){


    if(flag){

        interval=setInterval(timer,10);
        document.getElementById('start').className+="disabled";
        document.getElementById('start').className+="btn btn-primary rounded-pill";
        flag=false;
    }

}

function pause(){

    clearInterval(interval);
    flag=true;
}

function reset(){

    clearInterval(interval);
    hmin.innerHTML="00  : ";
    hsec.innerHTML="00  : "
    hmsec.innerHTML="00 ";
    flag=true;
    min=0;
    sec=0;
    msec=0;

    // document.getElementById('start').className+="btn btn-primary";
    
} 