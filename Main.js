var miTanque = new tanke();
/*
function pausecomp(millis)
{
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}


*/


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var gradient = ctx.createRadialGradient(250,250,1,250,250,300);



//gradient.addColorStop(0,'#09303a');
//gradient.addColorStop(1,'black');
gradient.addColorStop(0,'black');

ctx.fillStyle = gradient;
//ctx.fillStyle = '#333333';


//33.333
var i,j;

var nivelActual = new nivel();
nivelActual.creaNivel();

//document.write("ASD");


/*
var p = new Image(200,200);
p.src='imagenes/Tanke1/Tanke1U.png';
//var o = document.getElementById('Tanke1U.png');
ctx.drawImage(p,200,200);
//ctx.drawImage(o,200,200);
*/
document.addEventListener('keydown', function (e) {
    lastDownTarget = event.target;

    if (e.keyCode === 37) {
        miTanque.mover("left");
        //refrescador;
    }

    if (e.keyCode === 38) {
        miTanque.mover("up");
    }

    if (e.keyCode === 39) {
        miTanque.mover("right");
    }

    if (e.keyCode === 40) {
        miTanque.mover("down");
    }
    if (e.keyCode === 70) {
        miTanque.disparar();
    }
    refresh();

}, false);

var IA = new Array(10000);
var BA = new Array(10000);

function generadorAI() {
    for (i =0;i<22;i++) {
        for (j = 0; j < 22; j++) {
            if (nivelActual.matriz[i][j] === null) {
                this.random=Math.floor((Math.random() * 100) + 1);
                if(this.random===1)
                    nivelActual.matriz[i][j]=new tankeAI(i,j,IA.length);
            }
        }
    }
    /*this.posicion=Math.floor((Math.random() * 8) + 1);
    if (this.posicion===1){
        if(nivelActual.matriz[1][1]===null)
            nivelActual.matriz[1][1] = new tankeAI(1,1,IA.length);
    }
    else if (this.posicion===2){
        if(nivelActual.matriz[8][3]===null)
            nivelActual.matriz[8][3] = new tankeAI(8,1,IA.length);
    }
    else if (this.posicion===3){
        if(nivelActual.matriz[11][2]===null)
            nivelActual.matriz[11][2] = new tankeAI(8,1,IA.length);
    }
    else if (this.posicion===4){
        if(nivelActual.matriz[5][7]===null)
            nivelActual.matriz[5][7] = new tankeAI(8,1,IA.length);
    }
    else if (this.posicion===5){
        if(nivelActual.matriz[2][4]===null)
            nivelActual.matriz[1][5] = new tankeAI(8,1,IA.length);
    }
    else if (this.posicion===6){
        if(nivelActual.matriz[7][3]===null)
            nivelActual.matriz[7][3] = new tankeAI(8,1,IA.length);
    }
    else if (this.posicion===7){
        if(nivelActual.matriz[15][15]===null)
            nivelActual.matriz[15][15] = new tankeAI(8,1,IA.length);
    }
    else{
        if(nivelActual.matriz[14][1]===null)
            nivelActual.matriz[14][1] = new tankeAI(14,1,IA.length);
    }*/
    refresh();
}
function moverAI() {
    if(IA.length>0){
        this.movidos = new Array(IA.length);
        for (i =0;i<22;i++) {
            for (j=0;j<22;j++){
                if (nivelActual.matriz[i][j]!==null){
                    if((nivelActual.matriz[i][j].type==="tankeAI")&&nivelActual.matriz[i][j].tipo!==2&&(this.movidos[nivelActual.matriz[i][j].id]!=="tankeAI")){
                        this.movidos[nivelActual.matriz[i][j].id] = "tankeAI";
                        var posibilidad=Math.floor((Math.random() * 2) + 1);
                        if(posibilidad===1){
                            posibilidad=Math.floor((Math.random() * 2) + 1);
                            nivelActual.matriz[i][j].disparar();
                        }

                        else
                            nivelActual.matriz[i][j].mover();

                    }
                }
            }
        }
    }
    refresh();
}
function moverAIF() {
    if(IA.length>0){
        this.movidos = new Array(IA.length);
        for (i =0;i<22;i++) {
            for (j=0;j<22;j++){
                if (nivelActual.matriz[i][j]!==null){
                    if((nivelActual.matriz[i][j].type==="tankeAI")&&nivelActual.matriz[i][j].tipo===2&&(this.movidos[nivelActual.matriz[i][j].id]!=="tankeAI")){
                        this.movidos[nivelActual.matriz[i][j].id] = "tankeAI";
                        var posibilidad=Math.floor((Math.random() * 2) + 1);
                        if(posibilidad===1){
                            posibilidad=Math.floor((Math.random() * 2) + 1);
                            nivelActual.matriz[i][j].disparar();
                        }

                        else
                            nivelActual.matriz[i][j].mover();

                    }
                }
            }
        }
    }
    refresh();
}
function moverBala() {
    if(BA.length>0){
        this.movidos = new Array(BA.length);
        for (i =0;i<22;i++) {
            for (j=0;j<22;j++){
                if(nivelActual.matriz[i][j]!==null){
                    if(nivelActual.matriz[i][j].type==="bala"&&this.movidos[nivelActual.matriz[i][j].id]!=="bala"){
                        if(nivelActual.matriz[i][j].direccion!=="down"&&nivelActual.matriz[i][j].direccion!=="right"){
                            this.movidos[nivelActual.matriz[i][j].id] = "bala";
                            nivelActual.matriz[i][j].mover();
                        }
                    }
                }
            }
        }
        for (i =21;i>=0;i--) {
            for (j=21;j>=0;j--){
                if(nivelActual.matriz[i][j]!==null){
                    if(nivelActual.matriz[i][j].type==="bala"&&this.movidos[nivelActual.matriz[i][j].id]!=="bala"){
                        if(nivelActual.matriz[i][j].direccion!=="up"&&nivelActual.matriz[i][j].direccion!=="left"){
                            this.movidos[nivelActual.matriz[i][j].id] = "bala";
                            nivelActual.matriz[i][j].mover();
                        }
                    }
                }
            }
        }
    }
    refresh();
}
function terminado() {
    this.aguila=null;
    for (i =0;i<22;i++) {
        for (j=0;j<22;j++){
            if (nivelActual.matriz[i][j]!==null) {
                if(nivelActual.matriz[i][j].type==="aguila")
                    if(nivelActual.matriz[i][j].vivo===true)
                        this.aguila=nivelActual.matriz[i][j];
            }
        }
    }
    if(miTanque===null)
        nivelActual.matriz=null;
    else if(this.aguila===null){
        /*refreshI= null;
        moveriaI= null;
        moverbI = null;
        moveria2I=null;
        generadoriaI=null;
        terminadoI=null;
        nivelActual = new nivel();
        miTanque=new tanke();
        nivelActual.creaNivel();
        IA = new Array(10000);
        BA = new Array(10000);
        refreshI= setInterval(refresh,40);
        moveriaI= setInterval(moverAI,500);
        moverbI = setInterval(moverBala,100);
        moveria2I=setInterval(moverAIF,200);
        generadoriaI=setInterval(generadorAI,10000);
        terminadoI=setInterval(terminado,40);*/
        nivelActual.matriz=null;
    }
}
function refresh() {
    ctx.clearRect(0,0,594,594);
    ctx.fillRect(0, 0, 594, 594);
    for (i =0;i<22;i++) {
        for (j=0;j<22;j++){
            if (nivelActual.matriz[i][j]!==null) {
                ctx.drawImage(nivelActual.matriz[i][j].imagen, i * 27, j * 27, 27, 27);
            }
        }
    }
    //document.write(nivelActual.matriz[1][1].type);
}
generadorAI();
var refreshI= setInterval(refresh,40);
var moveriaI= setInterval(moverAI,500);
var moverbI = setInterval(moverBala,100);
var moveria2I=setInterval(moverAIF,200);
var generadoriaI=setInterval(generadorAI,10000);
var terminadoI=setInterval(terminado,40);
