function nivel() {
    this.matriz = new Array(18);
    var i,j;

    for (i =0;i<22;i++){
        this.matriz[i] = new Array(18);
        for (j=0;j<22;j++)
            this.matriz[i][j] = null;
    }
    this.creaNivel = function () {
        for (i =0;i<22;i++) {
            for (j=0;j<22;j++){
                if (j===21||j===0)
                    this.matriz[i][j]=new bloque(1);
                else if (i===0)
                    this.matriz[i][j]=new bloque(1);
                else if (i===21)
                    this.matriz[i][j]=new bloque(1);
                else{
                    this.random=Math.floor((Math.random() * 6) + 1);
                    if(this.random===1){
                        this.random=Math.floor((Math.random() * 2) + 1);
                        if(this.random===1)
                            this.matriz[i][j]=new bloque(1);
                    }
                    else if(this.random===2) {
                        this.matriz[i][j]=new bloque(2);
                    }
                    else if (this.random===3){
                        this.random=Math.floor((Math.random() * 5) + 1);
                        if(this.random===1)
                            this.matriz[i][j]=new aguila();
                    }
                }
                /*Por medio de randoms crear el nivel perfecto AK7=(AK6+1)*/
                /*posiciones reservadas (8,14) ,(1,1),(8,1),(14,1)*/

            }
        }
        this.matriz[8][14]= miTanque;
        //generadorAI();

    }
}
