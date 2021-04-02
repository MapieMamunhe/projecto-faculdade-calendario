


mostrarData();
setInterval(mostrarHoras, 1000);
mostrarSaudacao();
setInterval(mostrarSaudacao, 60000);
function mostrarSaudacao(){
    let espacoSaudacao = document.getElementById("d2");
    espacoSaudacao.innerHTML = tempoDia();
}
function tempoDia(){
    let hoje = new Date();
    let hora = hoje.getHours();
    let tempo;
    if( (hora >= 6) && (hora < 12)){
        tempo = "Manhã de ";
    }else{
        if((hora>=12) && (hora < 18)){
            tempo = "Tarde de ";
        }else{
            if((hora>=18) && (hora < 23)){
                tempo = "Noite de ";
            }else{
                tempo = "Madrugada de ";
            }
        }
    }
    let dS = definirDiaSemana(hoje.getDay());
    return tempo+dS;

}

function mostrarData(){
    let eD = document.getElementById("d1");//Espaco data
    let hoje = new Date();
    let dia =hoje.getDate();
    let mes = definirMes(hoje.getMonth());
    eD.innerText = "Dia: "+ dia +" de "+ mes;

}
function mostrarHoras(){
    let espacoHoras = document.getElementById("d3");
    espacoHoras.innerHTML = definirHorario();
}

//O metodo a seguir retorna uma string com nome do mes
function definirMes(mes){
    let m = ["Janeiro", "Fevereiro", "Março", "Abril",
            "Maio", "Junho", "Julho", "Agosto", "Outubro",
            "Novembro", "Dezembro"];
    return m[mes];
}
//O metodo a seguir retorna uma string com o nome do dia da semana
function definirDiaSemana(dia){
    let diaSemana =["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira",
                    "Quinta-feira","Sexta-Feira","Sábado"];

    return diaSemana[dia];
}
function definirHorario(){
    let hoje = new Date();
    let hora = formatarHorario(hoje.getHours());
    let minuto = formatarHorario(hoje.getMinutes());
    let segundos = formatarHorario(hoje.getSeconds());
    let horas = `${hora} : ${minuto} : ${segundos}`;
    return horas;
}
function formatarHorario(texto){
    return ('0'+texto).slice(-2);
}