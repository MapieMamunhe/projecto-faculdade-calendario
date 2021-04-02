function comecar(){
    console.log("Ola setInterval "+i);
    i++;
    if(i>=10){
        terminar();
    }
}
var i=0;
function terminar(){
    clearInterval(teste);
}
var teste = setInterval(comecar, 1000);