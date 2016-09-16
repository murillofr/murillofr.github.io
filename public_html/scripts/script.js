/* global g_matriz */

g_marcador = "X";
g_matriz = new Array(new Array(3), new Array(3), new Array(3));
for (var i = 0; i < 3; i++){
    for (var j = 0; j < 3; j++){
        g_matriz[i][j] = "txt" + i + j;
    }
}
g_bloqueado = false;
g_contadorVelha = 0;
g_jogador1 = "";
g_jogador2 = "";

function enviarNomes() {
       
    g_jogador1 = document.getElementById("txtJogador1").value;
    g_jogador2 = document.getElementById("txtJogador2").value;
    
    if(g_jogador1.trim() != "" && g_jogador2.trim() != "") {
        document.getElementById("menu").style.display = "block";
        document.getElementById("tabuleiro").style.display = "block";
        document.getElementById("fraseGanhador").style.display = "block";
        document.getElementById("menu").style.animationName = "animaMenuIn";
        document.getElementById("nomes").style.animationName = "animaNomesOut";
        document.getElementById("tabuleiro").style.animationName = "animaTabuleiroIn";
        document.getElementById("fraseGanhador").innerHTML = 'SUA VEZ ' + '<u>' + g_jogador1 + '</u>';
    }else {
        alert("Campos de NOME são obrigatórios.");
    }
}

function limparPs() {
    for (i=0;i<=2;i++) {
        for (j=0;j<=2;j++) {
            document.getElementById("txt"+i+j).innerHTML = "";
        }
    }
    document.getElementById("menu").style.display = "none";
    document.getElementById("tabuleiro").style.display = "none";
    document.getElementById("fraseGanhador").style.display = "none";
}
function mudarCor(id, cor) {
    if (g_bloqueado !== true) {
        document.getElementById(id).style.backgroundColor = cor;
    }else {
        document.getElementById(id).style.backgroundColor = "gray";
    }
}
function marcar(idTxt) {
    if (g_bloqueado !== true) {
        if (document.getElementById(idTxt).innerHTML === "") {
            document.getElementById(idTxt).innerHTML = g_marcador;
            g_matriz[idTxt.slice(3,4)][idTxt.slice(4,5)] = g_marcador;
            validarGanhador(idTxt);
            
            (g_marcador === "X")?g_marcador="O":g_marcador="X";
            
            if (g_bloqueado === false) {
                
                if (g_marcador === "O") {
                    document.getElementById("fraseGanhador").innerHTML = 'SUA VEZ ' + '<u>' + g_jogador2 + '</u>';
                }else {
                    document.getElementById("fraseGanhador").innerHTML = 'SUA VEZ ' + '<u>' + g_jogador1 + '</u>';
                }
                
            }

        }
    }
    
}
function bloquearTabuleiro() {
    g_bloqueado = true;
    for (i=0;i<=2;i++) {
        for (j=0;j<=2;j++) {
            document.getElementById("cel"+i+j).style.backgroundColor = "gray";
        }
    }
    document.getElementById("menu").style.top = "0px";
}
function validarGanhador(idTxt) {
    if (g_marcador === "X") {
        switch(idTxt.slice(3)) {
            case "00":
                if (g_matriz[1][0] === g_marcador && g_matriz[2][0] === g_marcador) {
                    document.getElementById("txt00").style.color = "red";
                    document.getElementById("txt10").style.color = "red";
                    document.getElementById("txt20").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador1 + '</u>' + ' GANHOU!';
                    bloquearTabuleiro();
                }
                if (g_matriz[1][1] === g_marcador && g_matriz[2][2] === g_marcador) {
                    document.getElementById("txt00").style.color = "red";
                    document.getElementById("txt11").style.color = "red";
                    document.getElementById("txt22").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador1 + '</u>' + ' GANHOU!';
                    bloquearTabuleiro();
                }
                if (g_matriz[0][1] === g_marcador && g_matriz[0][2] === g_marcador) {
                    document.getElementById("txt00").style.color = "red";
                    document.getElementById("txt01").style.color = "red";
                    document.getElementById("txt02").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador1 + '</u>' + ' GANHOU!';
                    bloquearTabuleiro();
                }
                break;
            case "01":
                if (g_matriz[0][0] === g_marcador && g_matriz[0][2] === g_marcador) {
                    document.getElementById("txt00").style.color = "red";
                    document.getElementById("txt01").style.color = "red";
                    document.getElementById("txt02").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador1 + '</u>' + ' GANHOU!';
                    bloquearTabuleiro();
                }
                if (g_matriz[1][1] === g_marcador && g_matriz[2][1] === g_marcador) {
                    document.getElementById("txt01").style.color = "red";
                    document.getElementById("txt11").style.color = "red";
                    document.getElementById("txt21").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador1 + '</u>' + ' GANHOU!';
                    bloquearTabuleiro();
                }
                break;
            case "02":
                if (g_matriz[0][0] === g_marcador && g_matriz[0][1] === g_marcador) {
                    document.getElementById("txt00").style.color = "red";
                    document.getElementById("txt01").style.color = "red";
                    document.getElementById("txt02").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador1 + '</u>' + ' GANHOU!';
                    bloquearTabuleiro();
                }
                if (g_matriz[1][1] === g_marcador && g_matriz[2][0] === g_marcador) {
                    document.getElementById("txt02").style.color = "red";
                    document.getElementById("txt11").style.color = "red";
                    document.getElementById("txt20").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador1 + '</u>' + ' GANHOU!';
                    bloquearTabuleiro();
                }
                if (g_matriz[1][2] === g_marcador && g_matriz[2][2] === g_marcador) {
                    document.getElementById("txt02").style.color = "red";
                    document.getElementById("txt12").style.color = "red";
                    document.getElementById("txt22").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador1 + '</u>' + ' GANHOU!';
                    bloquearTabuleiro();
                }
                break;
            case "10":
                if (g_matriz[0][0] === g_marcador && g_matriz[2][0] === g_marcador) {
                    document.getElementById("txt00").style.color = "red";
                    document.getElementById("txt10").style.color = "red";
                    document.getElementById("txt20").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador1 + '</u>' + ' GANHOU!';
                    bloquearTabuleiro();
                }
                if (g_matriz[1][1] === g_marcador && g_matriz[1][2] === g_marcador) {
                    document.getElementById("txt10").style.color = "red";
                    document.getElementById("txt11").style.color = "red";
                    document.getElementById("txt12").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador1 + '</u>' + ' GANHOU!';
                    bloquearTabuleiro();
                }
                break;
            case "11":
                if (g_matriz[0][1] === g_marcador && g_matriz[2][1] === g_marcador) {
                    document.getElementById("txt01").style.color = "red";
                    document.getElementById("txt11").style.color = "red";
                    document.getElementById("txt21").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador1 + '</u>' + ' GANHOU!';
                    bloquearTabuleiro();
                }
                if (g_matriz[0][2] === g_marcador && g_matriz[2][0] === g_marcador) {
                    document.getElementById("txt02").style.color = "red";
                    document.getElementById("txt11").style.color = "red";
                    document.getElementById("txt20").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador1 + '</u>' + ' GANHOU!';
                    bloquearTabuleiro();
                }
                if (g_matriz[1][0] === g_marcador && g_matriz[1][2] === g_marcador) {
                    document.getElementById("txt10").style.color = "red";
                    document.getElementById("txt11").style.color = "red";
                    document.getElementById("txt12").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador1 + '</u>' + ' GANHOU!';
                    bloquearTabuleiro();
                }
                if (g_matriz[0][0] === g_marcador && g_matriz[2][2] === g_marcador) {
                    document.getElementById("txt00").style.color = "red";
                    document.getElementById("txt11").style.color = "red";
                    document.getElementById("txt22").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador1 + '</u>' + ' GANHOU!';
                    bloquearTabuleiro();
                }
                break;
            case "12":
                if (g_matriz[0][2] === g_marcador && g_matriz[2][2] === g_marcador) {
                    document.getElementById("txt02").style.color = "red";
                    document.getElementById("txt12").style.color = "red";
                    document.getElementById("txt22").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador1 + '</u>' + ' GANHOU!';
                    bloquearTabuleiro();
                }
                if (g_matriz[1][0] === g_marcador && g_matriz[1][1] === g_marcador) {
                    document.getElementById("txt10").style.color = "red";
                    document.getElementById("txt11").style.color = "red";
                    document.getElementById("txt12").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador1 + '</u>' + ' GANHOU!';
                    bloquearTabuleiro();
                }
                break;
            case "20":
                if (g_matriz[0][0] === g_marcador && g_matriz[1][0] === g_marcador) {
                    document.getElementById("txt00").style.color = "red";
                    document.getElementById("txt10").style.color = "red";
                    document.getElementById("txt20").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador1 + '</u>' + ' GANHOU!';
                    bloquearTabuleiro();
                }
                if (g_matriz[0][2] === g_marcador && g_matriz[1][1] === g_marcador) {
                    document.getElementById("txt02").style.color = "red";
                    document.getElementById("txt11").style.color = "red";
                    document.getElementById("txt20").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador1 + '</u>' + ' GANHOU!';
                    bloquearTabuleiro();
                }
                if (g_matriz[2][1] === g_marcador && g_matriz[2][2] === g_marcador) {
                    document.getElementById("txt20").style.color = "red";
                    document.getElementById("txt21").style.color = "red";
                    document.getElementById("txt22").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador1 + '</u>' + ' GANHOU!';
                    bloquearTabuleiro();
                }
                break;
            case "21":
                if (g_matriz[2][0] === g_marcador && g_matriz[2][2] === g_marcador) {
                    document.getElementById("txt20").style.color = "red";
                    document.getElementById("txt21").style.color = "red";
                    document.getElementById("txt22").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador1 + '</u>' + ' GANHOU!';
                    bloquearTabuleiro();
                }
                if (g_matriz[0][1] === g_marcador && g_matriz[1][1] === g_marcador) {
                    document.getElementById("txt01").style.color = "red";
                    document.getElementById("txt11").style.color = "red";
                    document.getElementById("txt21").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador1 + '</u>' + ' GANHOU!';
                    bloquearTabuleiro();
                }
                break;
            case "22":
                if (g_matriz[2][0] === g_marcador && g_matriz[2][1] === g_marcador) {
                    document.getElementById("txt20").style.color = "red";
                    document.getElementById("txt21").style.color = "red";
                    document.getElementById("txt22").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador1 + '</u>' + ' GANHOU!';
                    bloquearTabuleiro();
                }
                if (g_matriz[0][0] === g_marcador && g_matriz[1][1] === g_marcador) {
                    document.getElementById("txt00").style.color = "red";
                    document.getElementById("txt11").style.color = "red";
                    document.getElementById("txt22").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador1 + '</u>' + ' GANHOU!';
                    bloquearTabuleiro();
                }
                if (g_matriz[0][2] === g_marcador && g_matriz[1][2] === g_marcador) {
                    document.getElementById("txt02").style.color = "red";
                    document.getElementById("txt12").style.color = "red";
                    document.getElementById("txt22").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador1 + '</u>' + ' GANHOU!';
                    bloquearTabuleiro();
                }
                break;
            default:
                
        }
    }else {
        switch(idTxt.slice(3)) {
            case "00":
                if (g_matriz[1][0] === g_marcador && g_matriz[2][0] === g_marcador) {
                    document.getElementById("txt00").style.color = "red";
                    document.getElementById("txt10").style.color = "red";
                    document.getElementById("txt20").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador2 + '</u>' + ' GANHOU!';
                    var temp = g_jogador1;
                    g_jogador1 = g_jogador2;
                    g_jogador2 = temp;
                    bloquearTabuleiro();
                }
                if (g_matriz[1][1] === g_marcador && g_matriz[2][2] === g_marcador) {
                    document.getElementById("txt00").style.color = "red";
                    document.getElementById("txt11").style.color = "red";
                    document.getElementById("txt22").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador2 + '</u>' + ' GANHOU!';
                    var temp = g_jogador1;
                    g_jogador1 = g_jogador2;
                    g_jogador2 = temp;
                    bloquearTabuleiro();
                }
                if (g_matriz[0][1] === g_marcador && g_matriz[0][2] === g_marcador) {
                    document.getElementById("txt00").style.color = "red";
                    document.getElementById("txt01").style.color = "red";
                    document.getElementById("txt02").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador2 + '</u>' + ' GANHOU!';
                    var temp = g_jogador1;
                    g_jogador1 = g_jogador2;
                    g_jogador2 = temp;
                    bloquearTabuleiro();
                }
                break;
            case "01":
                if (g_matriz[0][0] === g_marcador && g_matriz[0][2] === g_marcador) {
                    document.getElementById("txt00").style.color = "red";
                    document.getElementById("txt01").style.color = "red";
                    document.getElementById("txt02").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador2 + '</u>' + ' GANHOU!';
                    var temp = g_jogador1;
                    g_jogador1 = g_jogador2;
                    g_jogador2 = temp;
                    bloquearTabuleiro();
                }
                if (g_matriz[1][1] === g_marcador && g_matriz[2][1] === g_marcador) {
                    document.getElementById("txt01").style.color = "red";
                    document.getElementById("txt11").style.color = "red";
                    document.getElementById("txt21").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador2 + '</u>' + ' GANHOU!';
                    var temp = g_jogador1;
                    g_jogador1 = g_jogador2;
                    g_jogador2 = temp;
                    bloquearTabuleiro();
                }
                break;
            case "02":
                if (g_matriz[0][0] === g_marcador && g_matriz[0][1] === g_marcador) {
                    document.getElementById("txt00").style.color = "red";
                    document.getElementById("txt01").style.color = "red";
                    document.getElementById("txt02").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador2 + '</u>' + ' GANHOU!';
                    var temp = g_jogador1;
                    g_jogador1 = g_jogador2;
                    g_jogador2 = temp;
                    bloquearTabuleiro();
                }
                if (g_matriz[1][1] === g_marcador && g_matriz[2][0] === g_marcador) {
                    document.getElementById("txt02").style.color = "red";
                    document.getElementById("txt11").style.color = "red";
                    document.getElementById("txt20").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador2 + '</u>' + ' GANHOU!';
                    var temp = g_jogador1;
                    g_jogador1 = g_jogador2;
                    g_jogador2 = temp;
                    bloquearTabuleiro();
                }
                if (g_matriz[1][2] === g_marcador && g_matriz[2][2] === g_marcador) {
                    document.getElementById("txt02").style.color = "red";
                    document.getElementById("txt12").style.color = "red";
                    document.getElementById("txt22").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador2 + '</u>' + ' GANHOU!';
                    var temp = g_jogador1;
                    g_jogador1 = g_jogador2;
                    g_jogador2 = temp;
                    bloquearTabuleiro();
                }
                break;
            case "10":
                if (g_matriz[0][0] === g_marcador && g_matriz[2][0] === g_marcador) {
                    document.getElementById("txt00").style.color = "red";
                    document.getElementById("txt10").style.color = "red";
                    document.getElementById("txt20").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador2 + '</u>' + ' GANHOU!';
                    var temp = g_jogador1;
                    g_jogador1 = g_jogador2;
                    g_jogador2 = temp;
                    bloquearTabuleiro();
                }
                if (g_matriz[1][1] === g_marcador && g_matriz[1][2] === g_marcador) {
                    document.getElementById("txt10").style.color = "red";
                    document.getElementById("txt11").style.color = "red";
                    document.getElementById("txt12").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador2 + '</u>' + ' GANHOU!';
                    var temp = g_jogador1;
                    g_jogador1 = g_jogador2;
                    g_jogador2 = temp;
                    bloquearTabuleiro();
                }
                break;
            case "11":
                if (g_matriz[0][1] === g_marcador && g_matriz[2][1] === g_marcador) {
                    document.getElementById("txt01").style.color = "red";
                    document.getElementById("txt11").style.color = "red";
                    document.getElementById("txt21").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador2 + '</u>' + ' GANHOU!';
                    var temp = g_jogador1;
                    g_jogador1 = g_jogador2;
                    g_jogador2 = temp;
                    bloquearTabuleiro();
                }
                if (g_matriz[0][2] === g_marcador && g_matriz[2][0] === g_marcador) {
                    document.getElementById("txt02").style.color = "red";
                    document.getElementById("txt11").style.color = "red";
                    document.getElementById("txt20").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador2 + '</u>' + ' GANHOU!';
                    var temp = g_jogador1;
                    g_jogador1 = g_jogador2;
                    g_jogador2 = temp;
                    bloquearTabuleiro();
                }
                if (g_matriz[1][0] === g_marcador && g_matriz[1][2] === g_marcador) {
                    document.getElementById("txt10").style.color = "red";
                    document.getElementById("txt11").style.color = "red";
                    document.getElementById("txt12").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador2 + '</u>' + ' GANHOU!';
                    var temp = g_jogador1;
                    g_jogador1 = g_jogador2;
                    g_jogador2 = temp;
                    bloquearTabuleiro();
                }
                if (g_matriz[0][0] === g_marcador && g_matriz[2][2] === g_marcador) {
                    document.getElementById("txt00").style.color = "red";
                    document.getElementById("txt11").style.color = "red";
                    document.getElementById("txt22").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador2 + '</u>' + ' GANHOU!';
                    var temp = g_jogador1;
                    g_jogador1 = g_jogador2;
                    g_jogador2 = temp;
                    bloquearTabuleiro();
                }
                break;
            case "12":
                if (g_matriz[0][2] === g_marcador && g_matriz[2][2] === g_marcador) {
                    document.getElementById("txt02").style.color = "red";
                    document.getElementById("txt12").style.color = "red";
                    document.getElementById("txt22").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador2 + '</u>' + ' GANHOU!';
                    var temp = g_jogador1;
                    g_jogador1 = g_jogador2;
                    g_jogador2 = temp;
                    bloquearTabuleiro();
                }
                if (g_matriz[1][0] === g_marcador && g_matriz[1][1] === g_marcador) {
                    document.getElementById("txt10").style.color = "red";
                    document.getElementById("txt11").style.color = "red";
                    document.getElementById("txt12").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador2 + '</u>' + ' GANHOU!';
                    var temp = g_jogador1;
                    g_jogador1 = g_jogador2;
                    g_jogador2 = temp;
                    bloquearTabuleiro();
                }
                break;
            case "20":
                if (g_matriz[0][0] === g_marcador && g_matriz[1][0] === g_marcador) {
                    document.getElementById("txt00").style.color = "red";
                    document.getElementById("txt10").style.color = "red";
                    document.getElementById("txt20").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador2 + '</u>' + ' GANHOU!';
                    var temp = g_jogador1;
                    g_jogador1 = g_jogador2;
                    g_jogador2 = temp;
                    bloquearTabuleiro();
                }
                if (g_matriz[0][2] === g_marcador && g_matriz[1][1] === g_marcador) {
                    document.getElementById("txt02").style.color = "red";
                    document.getElementById("txt11").style.color = "red";
                    document.getElementById("txt20").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador2 + '</u>' + ' GANHOU!';
                    var temp = g_jogador1;
                    g_jogador1 = g_jogador2;
                    g_jogador2 = temp;
                    bloquearTabuleiro();
                }
                if (g_matriz[2][1] === g_marcador && g_matriz[2][2] === g_marcador) {
                    document.getElementById("txt20").style.color = "red";
                    document.getElementById("txt21").style.color = "red";
                    document.getElementById("txt22").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador2 + '</u>' + ' GANHOU!';
                    var temp = g_jogador1;
                    g_jogador1 = g_jogador2;
                    g_jogador2 = temp;
                    bloquearTabuleiro();
                }
                break;
            case "21":
                if (g_matriz[2][0] === g_marcador && g_matriz[2][2] === g_marcador) {
                    document.getElementById("txt20").style.color = "red";
                    document.getElementById("txt21").style.color = "red";
                    document.getElementById("txt22").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador2 + '</u>' + ' GANHOU!';
                    var temp = g_jogador1;
                    g_jogador1 = g_jogador2;
                    g_jogador2 = temp;
                    bloquearTabuleiro();
                }
                if (g_matriz[0][1] === g_marcador && g_matriz[1][1] === g_marcador) {
                    document.getElementById("txt01").style.color = "red";
                    document.getElementById("txt11").style.color = "red";
                    document.getElementById("txt21").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador2 + '</u>' + ' GANHOU!';
                    var temp = g_jogador1;
                    g_jogador1 = g_jogador2;
                    g_jogador2 = temp;
                    bloquearTabuleiro();
                }
                break;
            case "22":
                if (g_matriz[2][0] === g_marcador && g_matriz[2][1] === g_marcador) {
                    document.getElementById("txt20").style.color = "red";
                    document.getElementById("txt21").style.color = "red";
                    document.getElementById("txt22").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador2 + '</u>' + ' GANHOU!';
                    var temp = g_jogador1;
                    g_jogador1 = g_jogador2;
                    g_jogador2 = temp;
                    bloquearTabuleiro();
                }
                if (g_matriz[0][0] === g_marcador && g_matriz[1][1] === g_marcador) {
                    document.getElementById("txt00").style.color = "red";
                    document.getElementById("txt11").style.color = "red";
                    document.getElementById("txt22").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador2 + '</u>' + ' GANHOU!';
                    var temp = g_jogador1;
                    g_jogador1 = g_jogador2;
                    g_jogador2 = temp;
                    bloquearTabuleiro();
                }
                if (g_matriz[0][2] === g_marcador && g_matriz[1][2] === g_marcador) {
                    document.getElementById("txt02").style.color = "red";
                    document.getElementById("txt12").style.color = "red";
                    document.getElementById("txt22").style.color = "red";
                    document.getElementById("fraseGanhador").innerHTML = '<u>' + g_jogador2 + '</u>' + ' GANHOU!';
                    var temp = g_jogador1;
                    g_jogador1 = g_jogador2;
                    g_jogador2 = temp;
                    bloquearTabuleiro();
                }
                break;
            default:
                
        }
    }
    g_contadorVelha += 1;
    if (g_contadorVelha >= 9 && g_bloqueado == false) {
        document.getElementById("fraseGanhador").innerHTML = 'DEU VELHA!';
        var temp = g_jogador1;
        g_jogador1 = g_jogador2;
        g_jogador2 = temp;
        bloquearTabuleiro();
    }
}
function novoJogo() {
    g_marcador = "X";
    g_contadorVelha = 0;
    for (var i = 0; i < 3; i++){
        for (var j = 0; j < 3; j++){
            g_matriz[i][j] = "txt" + i + j;
        }
    }
    g_bloqueado = false;
    if (document.getElementById("cel00").style.backgroundColor == 'gray') {
        document.getElementById("menu").style.top = "-50px";
    }
    
    for (i=0;i<=2;i++) {
        for (j=0;j<=2;j++) {
            document.getElementById("cel"+i+j).style.backgroundColor = "white";
            document.getElementById("txt"+i+j).innerHTML = "";
            document.getElementById("txt"+i+j).style.color = "black";
        }
    }
    
    document.getElementById("txtJogador1").value = g_jogador1;
    document.getElementById("txtJogador2").value = g_jogador2;
    g_jogador1 = "";
    g_jogador2 = "";
    document.getElementById("fraseGanhador").innerHTML = '';
    
    document.getElementById("menu").style.animationName = "animaMenuOut";
    document.getElementById("nomes").style.animationName = "animaNomesIn";
    document.getElementById("tabuleiro").style.animationName = "animaTabuleiroOut";
    document.getElementById("menu").style.opacity = "0";
    document.getElementById("tabuleiro").style.opacity = "0";
    
}
function tamanhoMenu1() {
    if (document.getElementById("cel00").style.backgroundColor == 'gray') {
        document.getElementById("menu").style.top = "0px";
    }else {
        document.getElementById("menu").style.top = "0px";
    }
}
function tamanhoMenu2() {
    if (document.getElementById("cel00").style.backgroundColor == 'gray') {
        document.getElementById("menu").style.top = "0px";
    }else {
        document.getElementById("menu").style.top = "-50px";
    }
}