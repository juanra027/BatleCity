function tankeAI(posX,posY,id) {
    this.type = "tankeAI";
    this.id =id;
    this.imagen = new Image();

    this.direccion = "down";
    this.sonido =  document.createElement('audio');
    this.sonido.setAttribute('src', 'sonidos/muerte.wav');
    this.tipo=Math.floor((Math.random() * 3) + 1);
    //this.tipo=1;
    if (this.tipo===1){
        this.direccionImgU="imagenes/Enemigo/Enemigo1U.png";
        this.direccionImgL="imagenes/Enemigo/Enemigo1L.png";
        this.direccionImgD="imagenes/Enemigo/Enemigo1D.png";
        this.direccionImgR="imagenes/Enemigo/Enemigo1R.png";
    }
    else if (this.tipo===2){
        this.direccionImgU="imagenes/Enemigo/Enemigo2U.png";
        this.direccionImgL="imagenes/Enemigo/Enemigo2L.png";
        this.direccionImgD="imagenes/Enemigo/Enemigo2D.png";
        this.direccionImgR="imagenes/Enemigo/Enemigo2R.png";
    }
    else{
        this.direccionImgU="imagenes/Enemigo/Enemigo3U.png";
        this.direccionImgL="imagenes/Enemigo/Enemigo3L.png";
        this.direccionImgD="imagenes/Enemigo/Enemigo3D.png";
        this.direccionImgR="imagenes/Enemigo/Enemigo3R.png";
    }
    this.posX=posX;
    this.posY=posY;
    this.imagen.src=this.direccionImgD;
    IA.push(this);



    this.mover = function () {
        this.direccion = Math.floor((Math.random() * 4) + 1);
        //this.direccion=4;
        if(this.direccion===1){
            this.direccion="up";
            this.imagen.src=this.direccionImgU;
            if (this.posY!==1&&nivelActual.matriz[this.posX][this.posY-1]===null/*falta el and con que la matriz sea igual a null*/){
                nivelActual.matriz[this.posX][this.posY]=null;
                this.posY-=1;
                nivelActual.matriz[this.posX][this.posY]=this;
                /*falta moverlo en la matriz y poner la posicion anterior como null*/
            }

        }
        else if (this.direccion===2){
            this.direccion="left";
            this.imagen.src=this.direccionImgL;
            if (this.posX!==1&&nivelActual.matriz[this.posX-1][this.posY]===null/*falta el and con que la matriz sea igual a null*/){
                nivelActual.matriz[this.posX][this.posY]=null;
                this.posX-=1;
                nivelActual.matriz[this.posX][this.posY]=this;
                /*falta moverlo en la matriz y poner la posicion anterior como null*/
            }
        }
        else if (this.direccion===3){
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
                if((nivelActual.matriz[this.posX][this.posY-1].type !== "metal")&&(nivelActual.matriz[this.posX][this.posY-1].type !== "ladrillo")){
                    if(nivelActual.matriz[this.posX][this.posY-1].type!=="tankeAI"){
                        if(nivelActual.matriz[this.posX][this.posY-1].type!=="bala"&&nivelActual.matriz[this.posX][this.posY-1].type!=="aguila")
                            nivelActual.matriz[this.posX][this.posY-1].sonido.play();
                        if(nivelActual.matriz[this.posX][this.posY-1].type==="tanke")
                            nivelActual.matriz[this.posX][this.posY-1].morir();
                        if(nivelActual.matriz[this.posX][this.posY-1].type!=="aguila")
                            nivelActual.matriz[this.posX][this.posY-1]=null;
                        miTanque.actualiza();
                    }
                    /*else{
                        nivelActual.matriz[this.posX][this.posY-1].sonido.play();

                    }*/
                }
                else{
                    nivelActual.matriz[this.posX][this.posY-1].sonido.play();
                }
            }
            else{
                nivelActual.matriz[this.posX][this.posY-1]=new bala("up",this.posX,this.posY-1,BA.length,"tanke");
            }
        }
        else if (this.direccion==="left"){
            if(nivelActual.matriz[this.posX-1][this.posY]!==null){
                if((nivelActual.matriz[this.posX-1][this.posY].type !== "metal")&&(nivelActual.matriz[this.posX-1][this.posY].type !== "ladrillo")){
                    if(nivelActual.matriz[this.posX-1][this.posY].type!=="tankeAI"){
                        if(nivelActual.matriz[this.posX-1][this.posY].type!=="bala"&&nivelActual.matriz[this.posX-1][this.posY].type!=="aguila")
                            nivelActual.matriz[this.posX-1][this.posY].sonido.play();
                        if(nivelActual.matriz[this.posX-1][this.posY].type==="tanke")
                            nivelActual.matriz[this.posX-1][this.posY].morir();
                        if(nivelActual.matriz[this.posX-1][this.posY].type!=="aguila")
                            nivelActual.matriz[this.posX-1][this.posY]=null;
                        miTanque.actualiza();
                    }
                    /*else{
                        nivelActual.matriz[this.posX-1][this.posY].sonido.play();

                    }*/
                }
            }
            else{
                nivelActual.matriz[this.posX-1][this.posY]=new bala("left",this.posX-1,this.posY,BA.length,"tanke");
            }
        }
        else if (this.direccion==="down"){
            if(nivelActual.matriz[this.posX][this.posY+1]!==null){
                if((nivelActual.matriz[this.posX][this.posY+1].type !== "metal")&&(nivelActual.matriz[this.posX][this.posY+1].type !== "ladrillo")){
                    if(nivelActual.matriz[this.posX][this.posY+1].type!=="tankeAI"){
                        if(nivelActual.matriz[this.posX][this.posY+1].type!=="bala"&&nivelActual.matriz[this.posX][this.posY+1].type!=="aguila")
                            nivelActual.matriz[this.posX][this.posY+1].sonido.play();
                        if(nivelActual.matriz[this.posX][this.posY+1].type==="tanke")
                            nivelActual.matriz[this.posX][this.posY+1].morir();
                        if(nivelActual.matriz[this.posX][this.posY+1].type!=="aguila")
                            nivelActual.matriz[this.posX][this.posY+1]=null;
                        miTanque.actualiza();
                    }
                    /*else{
                        nivelActual.matriz[this.posX][this.posY+1].sonido.play();

                    }*/
                }
            }
            else{
                nivelActual.matriz[this.posX][this.posY+1]=new bala("down",this.posX,this.posY+1,BA.length,"tanke");
            }
        }
        else{
            if(nivelActual.matriz[this.posX+1][this.posY]!==null){
                if((nivelActual.matriz[this.posX+1][this.posY].type !== "metal")&&(nivelActual.matriz[this.posX+1][this.posY].type !== "ladrillo")){
                    if(nivelActual.matriz[this.posX+1][this.posY].type!=="tankeAI"){
                        if(nivelActual.matriz[this.posX+1][this.posY].type!=="bala"&&nivelActual.matriz[this.posX+1][this.posY].type!=="aguila")
                            nivelActual.matriz[this.posX+1][this.posY].sonido.play();
                        if(nivelActual.matriz[this.posX+1][this.posY].type==="tanke")
                            nivelActual.matriz[this.posX+1][this.posY].morir();
                        if(nivelActual.matriz[this.posX+1][this.posY].type!=="aguila")
                            nivelActual.matriz[this.posX+1][this.posY]=null;
                        miTanque.actualiza();
                    }
                    /*else{
                        nivelActual.matriz[this.posX+1][this.posY].sonido.play();

                    }*/
                }
            }
            else{
                nivelActual.matriz[this.posX+1][this.posY]=new bala("right",this.posX+1,this.posY,BA.length,"tanke");
            }
        }
    };
}
