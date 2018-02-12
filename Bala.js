function bala(direccion,X,Y,id,obj) {
    this.posY=Y;
    this.posX=X;
    this.id =id;
    this.type="bala";
    this.obj=obj;
    this.direccion=direccion;
    this.direccionImgU="imagenes/Bala/BalaU.png";
    this.direccionImgL="imagenes/Bala/BalaL.png";
    this.direccionImgD="imagenes/Bala/BalaD.png";
    this.direccionImgR="imagenes/Bala/BalaR.png";
    this.sonido =  document.createElement('audio');
    this.sonido.setAttribute('src', 'sonidos/bala.wav');

    this.imagen = new Image();

    BA.push(this);
    if(direccion==="up"){
        this.direccion=direccion;
        this.imagen.src=this.direccionImgU;
    }
    else if (direccion==="left"){
        this.direccion=direccion;
        this.imagen.src=this.direccionImgL;
    }
    else if (direccion==="down"){
        this.direccion=direccion;
        this.imagen.src=this.direccionImgD;
    }
    else{
        this.direccion=direccion;
        this.imagen.src=this.direccionImgR;
    }
    this.mover = function () {
        nivelActual.matriz[this.posX][this.posY]=null;
        if(this.direccion==="up"){
            if(nivelActual.matriz[this.posX][this.posY-1]!==null){
                if(nivelActual.matriz[this.posX][this.posY-1].type!=="metal"){
                    if(nivelActual.matriz[this.posX][this.posY-1].type==="tanke"){
                        if(this.obj==="tanke") {
                            nivelActual.matriz[this.posX][this.posY-1].sonido.play();
                            nivelActual.matriz[this.posX][this.posY-1].morir();
                            nivelActual.matriz[this.posX][this.posY - 1] = null;
                            miTanque.actualiza();
                        }
                    }
                    else if(nivelActual.matriz[this.posX][this.posY-1].type==="tankeAI"){
                        if(this.obj==="tankeAI") {
                            nivelActual.matriz[this.posX][this.posY-1].sonido.play();
                            nivelActual.matriz[this.posX][this.posY - 1] = null;
                        }
                    }
                    else if(nivelActual.matriz[this.posX][this.posY-1].type==="aguila"){
                        if(this.obj==="tankeAI") {
                            if (nivelActual.matriz[this.posX][this.posY - 1].vivo === true) {
                                nivelActual.matriz[this.posX][this.posY - 1].sonido.play();
                                nivelActual.matriz[this.posX][this.posY - 1].morir();
                            }
                        }
                    }
                    else if(nivelActual.matriz[this.posX][this.posY-1].type==="ladrillo"){
                        if(this.obj==="tankeAI") {
                            nivelActual.matriz[this.posX][this.posY-1].sonido.play();
                            nivelActual.matriz[this.posX][this.posY - 1] = null;
                        }
                    }
                    else{
                        nivelActual.matriz[this.posX][this.posY - 1] = null;
                    }
                }
                else{
                    nivelActual.matriz[this.posX][this.posY-1].sonido.play();
                }
            }
            else{
                this.posY-=1;
                nivelActual.matriz[this.posX][this.posY]=this;

            }
        }
        else if (this.direccion==="left"){
            if(nivelActual.matriz[this.posX-1][this.posY]!==null){
                if(nivelActual.matriz[this.posX-1][this.posY].type!=="metal"){
                    if(nivelActual.matriz[this.posX-1][this.posY].type==="tanke"){
                        if(this.obj==="tanke") {
                            nivelActual.matriz[this.posX-1][this.posY].sonido.play();
                            nivelActual.matriz[this.posX-1][this.posY].morir();
                            nivelActual.matriz[this.posX-1][this.posY] = null;
                            miTanque.actualiza();
                        }
                    }
                    else if(nivelActual.matriz[this.posX-1][this.posY].type==="tankeAI"){
                        if(this.obj==="tankeAI") {
                            nivelActual.matriz[this.posX-1][this.posY].sonido.play();
                            nivelActual.matriz[this.posX-1][this.posY] = null;
                        }
                    }
                    else if(nivelActual.matriz[this.posX-1][this.posY].type==="aguila"){
                        if(this.obj==="tankeAI") {
                            if (nivelActual.matriz[this.posX-1][this.posY].vivo === true) {
                                nivelActual.matriz[this.posX-1][this.posY].sonido.play();
                                nivelActual.matriz[this.posX-1][this.posY].morir();
                            }
                        }
                    }
                    else if(nivelActual.matriz[this.posX-1][this.posY].type==="ladrillo"){
                        if(this.obj==="tankeAI") {
                            nivelActual.matriz[this.posX-1][this.posY].sonido.play();
                            nivelActual.matriz[this.posX-1][this.posY] = null;
                        }
                    }
                    else{
                        nivelActual.matriz[this.posX-1][this.posY] = null;
                    }
                }
                else{
                    nivelActual.matriz[this.posX-1][this.posY].sonido.play();
                }
            }
            else{
                this.posX-=1;
                nivelActual.matriz[this.posX][this.posY]=this;

            }
            /*ciclo que mueva la bala en la direccion que indica*/
        }
        else if (this.direccion==="down"){
            //pausecomp(10000);
            if(nivelActual.matriz[this.posX][this.posY+1]!==null){
                if(nivelActual.matriz[this.posX][this.posY+1].type!=="metal"){
                    if(nivelActual.matriz[this.posX][this.posY+1].type==="tanke"){
                        if(this.obj==="tanke") {
                            nivelActual.matriz[this.posX][this.posY+1].sonido.play();
                            nivelActual.matriz[this.posX][this.posY+1].morir();
                            nivelActual.matriz[this.posX][this.posY + 1] = null;
                            miTanque.actualiza();
                        }
                    }
                    else if(nivelActual.matriz[this.posX][this.posY+1].type==="tankeAI"){
                        if(this.obj==="tankeAI") {
                            nivelActual.matriz[this.posX][this.posY+1].sonido.play();
                            nivelActual.matriz[this.posX][this.posY + 1] = null;
                        }
                    }
                    else if(nivelActual.matriz[this.posX][this.posY+1].type==="aguila"){
                        if(this.obj==="tankeAI") {
                            if (nivelActual.matriz[this.posX][this.posY + 1].vivo === true) {
                                nivelActual.matriz[this.posX][this.posY + 1].sonido.play();
                                nivelActual.matriz[this.posX][this.posY + 1].morir();
                            }
                        }
                    }
                    else if(nivelActual.matriz[this.posX][this.posY+1].type==="ladrillo"){
                        if(this.obj==="tankeAI") {
                            nivelActual.matriz[this.posX][this.posY+1].sonido.play();
                            nivelActual.matriz[this.posX][this.posY + 1] = null;
                        }
                    }

                    else{
                        nivelActual.matriz[this.posX][this.posY + 1] = null;
                    }
                }
                else{
                    nivelActual.matriz[this.posX][this.posY+1].sonido.play();
                }
            }
            else{
                this.posY+=1;
                nivelActual.matriz[this.posX][this.posY]=this;

            }
            /*ciclo que mueva la bala en la direccion que indica*/
        }
        else{
            if(nivelActual.matriz[this.posX+1][this.posY]!==null){
                if(nivelActual.matriz[this.posX+1][this.posY].type!=="metal"){
                    if(nivelActual.matriz[this.posX+1][this.posY].type==="tanke"){
                        if(this.obj==="tanke") {
                            nivelActual.matriz[this.posX+1][this.posY].sonido.play();
                            nivelActual.matriz[this.posX+1][this.posY].morir();
                            nivelActual.matriz[this.posX+1][this.posY] = null;
                            miTanque.actualiza();
                        }
                    }
                    else if(nivelActual.matriz[this.posX+1][this.posY].type==="tankeAI"){
                        if(this.obj==="tankeAI") {
                            nivelActual.matriz[this.posX+1][this.posY].sonido.play();
                            nivelActual.matriz[this.posX+1][this.posY] = null;
                        }
                    }
                    else if(nivelActual.matriz[this.posX+1][this.posY].type==="aguila"){
                        if(this.obj==="tankeAI") {
                            if (nivelActual.matriz[this.posX+1][this.posY].vivo === true) {
                                nivelActual.matriz[this.posX+1][this.posY].sonido.play();
                                nivelActual.matriz[this.posX+1][this.posY].morir();
                            }
                        }
                    }
                    else if(nivelActual.matriz[this.posX+1][this.posY].type==="ladrillo"){
                        if(this.obj==="tankeAI") {
                            nivelActual.matriz[this.posX+1][this.posY].sonido.play();
                            nivelActual.matriz[this.posX+1][this.posY] = null;
                        }
                    }

                    else{
                        nivelActual.matriz[this.posX+1][this.posY] = null;
                    }
                }
                else{
                    nivelActual.matriz[this.posX+1][this.posY].sonido.play();
                }
            }
            else{
                this.posX+=1;
                nivelActual.matriz[this.posX][this.posY]=this;
            }
        }
    }
}