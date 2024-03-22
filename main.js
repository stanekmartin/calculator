
var po1,po2,po3,po4;
po2=9999;

function bu1(){

    if (po2==='1' || po2==='+') {
        po3=1;
    
    } else{
    po1=1;
    };
    
    };
function bu2(){
    if (po2==='1'|| po2==='+') {
        po3=2;
        
    } else{
    po1=2;
    };
};
function bu3(){
    if (po2==='1' || po2==='+') {
        po3=3;
        
    } else{
    po1=3;
    };
};
function bu4(){
    if (po2==='1' || po2==='+') {
        po3=4;
        
    } else{
    po1=4;
    };  
};
function bu5(){
    if (po2==='1' || po2==='+') {
        po3=5;
        
    } else{
    po1=5;
    };
};
function bu6(){
    if (po2==='1' || po2==='+') {
        po3=6;
        
    } else{
    po1=6;
    };
};
function bu7(){
    if (po2==='1' || po2==='+') {
        po3=7;
        
    } else{
    po1=7;
    };
};
function bu8(){
    if (po2==='1' || po2==='+') {
        po3=8;
        
    } else{
    po1=8;
    };
};
function bu9(){
    if (po2==='1' || po2==='+') {
        po3=9;
        
    } else{
    po1=9;
    };
};
function bu0(){
    if (po2==='1' || po2==='+') {
        po3=0;
        
    } else{
    po1=0;
    
    };
    
};


function zmacknutíp() {
    po4 = po1 + po3;
    document.getElementById("output").innerHTML = po4;
};
function zmacknutím() {
    po4 = po1 - po3;
    document.getElementById("output").innerHTML = po4;
};
setInterval(function() {
    console.log(po3);
    console.log(po1);
}, 1000); // 1000 milliseconds = 1 second