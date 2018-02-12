function tanke() {
    this.vidas=3;
    this.direccionImgU="imagenes/Tanke1/Tanke1U.png";
    this.direccionImgL="imagenes/Tanke1/Tanke1L.png";
    this.direccionImgD="imagenes/Tanke1/Tanke1D.png";
    this.direccionImgR="imagenes/Tanke1/Tanke1R.png";
    this.imagen = new Image();
    this.type="tanke";
    this.direccion = "up";
    this.imagen.src=this.direccionImgU;
    this.posX=8;
    this.posY=14;
    this.sonido =  document.createElement('audio');
    this.sonido.setAttribute('src', 'sonidos/muerte.wav');
    this.mover = function (tecla) {
        if(tecla==="up"){
            this.direccion="up";
            this.imagen.src=this.direccionImgU;
            if (this.posY!==1&&nivelActual.matriz[this.posX][this.posY-1]===null/*falta el and con que la matriz sea igual a null*/){
                nivelActual.matriz[this.posX][this.posY]=null;
                this.posY-=1;
                nivelActual.matriz[this.posX][this.posY]=this;
                /*falta moverlo en la matriz y poner la posicion anterior como null*/
            }
        }
        else if (tecla==="left"){
            this.direccion="left";
            this.imagen.src=this.direccionImgL;
            if (this.posX!==1&&nivelActual.matriz[this.posX-1][this.posY]===null/*falta el and con que la matriz sea igual a null*/){
                nivelActual.matriz[this.posX][this.posY]=null;
                this.posX-=1;
                nivelActual.matriz[this.posX][this.posY]=this;
                /*falta moverlo en la matriz y poner la posicion anterior como null*/
            }
        }
        else if (tecla==="down"){
            this.direccion="down";
            this.imagen.src=this.direccionImgD;
            if (this.posY!==21&&nivelActual.matriz[this.posX][this.posY+1]===null/*falta el and con que la matriz sea igual a null*/){
                nivelActual.matriz[this.posX][this.posY]=null;
                this.posY+=1;
                nivelActual.matriz[this.posX][this.posY]=this;

                /*falta moverlo en la matriz y poner la posicion anterior como null*/
            }
        }
        else{
            this.direccion="right";
            this.imagen.src=this.direccionImgR;
            if (this.posX!==21&&nivelActual.matriz[this.posX+1][this.posY]===null/*falta el and con que la matriz sea igual a null*/){
                nivelActual.matriz[this.posX][this.posY]=null;
                this.posX+=1;
                nivelActual.matriz[this.posX][this.posY]=this;

                /*falta moverlo en la matriz y poner la posicion anterior como null*/
            }
        }

    };
    this.disparar = function () {
        if (this.direccion==="up"){
            if(nivelActual.matriz[this.posX][this.posY-1]!==null){
                nivelActual.matriz[this.posX][this.posY-1].sonido.play();
                if(nivelActual.matriz[this.posX][this.posY-1].type !== "metal"){
                    if(nivelActual.matriz[this.posX][this.posY-1].type==="aguila"){
                        if (nivelActual.matriz[this.posX][this.posY-1].vivo === true) {
                            nivelActual.matriz[this.posX][this.posY-1].sonido.play();
                            nivelActual.matriz[this.posX][this.posY-1].morir();
                        }
                    }
                    else
                        nivelActual.matriz[this.posX][this.posY-1]=null;
                }

            }
            else{
                nivelActual.matriz[this.posX][this.posY-1]=new bala("up",this.posX,this.posY-1,BA.length,"tankeAI");
                nivelActual.matriz[this.posX][this.posY-1].sonido.play();
            }
        }
        else if (this.direccion==="left"){
            if(nivelActual.matriz[this.posX-1][this.posY]!==null){
                nivelActual.matriz[this.posX-1][this.posY].sonido.play();
                if(nivelActual.matriz[this.posX-1][this.posY].type !== "metal"){
                    if(nivelActual.matriz[this.posX-1][this.posY].type==="aguila"){
                        if (nivelActual.matriz[this.posX-1][this.posY].vivo === true) {
                            nivelActual.matriz[this.posX-1][this.posY].sonido.play();
                            nivelActual.matriz[this.posX-1][this.posY].morir();
                        }
                    }
                    else
                        nivelActual.matriz[this.posX-1][this.posY]=null;
                }
            }
            else{
                nivelActual.matriz[this.posX-1][this.posY]=new bala("left",this.posX-1,this.posY,BA.length,"tankeAI");
                nivelActual.matriz[this.posX-1][this.posY].sonido.play();
            }
        }
        else if (this.direccion==="down"){
            if(nivelActual.matriz[this.posX][this.posY+1]!==null){
                nivelActual.matriz[this.posX][this.posY+1].sonido.play();
                if(nivelActual.matriz[this.posX][this.posY+1].type !== "metal"){
                    if(nivelActual.matriz[this.posX][this.posY+1].type==="aguila"){
                        if (nivelActual.matriz[this.posX][this.posY+1].vivo === true) {
                            nivelActual.matriz[this.posX][this.posY+1].sonido.play();
                            nivelActual.matriz[this.posX][this.posY+1].morir();
                        }
                    }
                    else
                        nivelActual.matriz[this.posX][this.posY+1]=null;
                }
            }
            else{
                nivelActual.matriz[this.posX][this.posY+1]=new bala("down",this.posX,this.posY+1,BA.length,"tankeAI");
                nivelActual.matriz[this.posX][this.posY+1].sonido.play();
            }
        }
        else{
            if(nivelActual.matriz[this.posX+1][this.posY]!==null){
                nivelActual.matriz[this.posX+1][this.posY].sonido.play();
                if(nivelActual.matriz[this.posX+1][this.posY].type !== "metal"){
                    if(nivelActual.matriz[this.posX+1][this.posY].type==="aguila"){
                        if (nivelActual.matriz[this.posX+1][this.posY].vivo === true) {
                            nivelActual.matriz[this.posX+1][this.posY].sonido.play();
                            nivelActual.matriz[this.posX+1][this.posY].morir();
                        }
                    }
                    else
                        nivelActual.matriz[this.posX+1][this.posY]=null;
                }
            }
            else{
                nivelActual.matriz[this.posX+1][this.posY]=new bala("right",this.posX+1,this.posY,BA.length,"tankeAI");
                nivelActual.matriz[this.posX+1][this.posY].sonido.play();
            }
        }
        /*crea objeto de tipo bala y manda el parametro de la direccion*/
    };
    this.morir = function () {
        this.vidas-=1;
        if(this.vidas===0)
            miTanque = null;
        else{
            this.posX=8;
            this.posY=14;
            this.direccion="up";
        }
        /*supongo que serar pasar a null el objeto en la posicion anterior, se manda a llamar desde mover*/
    };
    this.actualiza= function () {
        if((this.posX===8)&&(this.posY===14)&&(this.direccion==="up")){
            this.direccion="up";
            this.imagen.src=this.direccionImgU;
            nivelActual.matriz[8][14]=this;
        }

    };
}
