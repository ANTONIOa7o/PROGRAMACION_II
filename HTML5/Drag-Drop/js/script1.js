/*
var capital="", Almacenar el nombre de la capital que estoy arrastrando
*/
var capital="";

function start(){
event.target.style.opacity='0,8';
capital = event.target.id;
}
function end(){
event.target.style.opacity='1';
}
//Almacenar el pais donde se intenta dejar la capital
function over(){
    var pais =event.target.id;
    if((pais=="españa" && capital=="madrid") ||(pais=="portugal" && capital=="lisboa")||(pais=="francia" && capital=="paris")){
        event.target.style.border = "5px solid green";

    }else{
        event.target.style.border ="5px solid red";
    }
    //Cancelar el evento over, sino no detectetará el drop
    event.preventDefault();

}
function leave(){
event.target.style.border="none";
}
function drop(){
    //Almacenar el pais donde se ha trasladado la capital
    var pais=event.target.id;
    if((pais=="españa" && capital=="madrid") ||(pais=="portugal" && capital=="lisboa")||(pais=="francia" && capital=="paris")){
       event.target.appendChild(document.getElementById(capital));

    } 
    event.target.style.border="none";

}
