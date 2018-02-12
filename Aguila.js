function aguila() {
    this.imgAguila1 ="imagenes/Aguila/Aguila1.png";
    this.imgAguila1M= "imagenes/Aguila/Aguila1M.png";
    this.imgAguila2 ="imagenes/Aguila/Aguila2.png";
    this.imgAguila2M ="imagenes/Aguila/Aguila2M.png";

    this.imagen = new Image();
    this.imgR=Math.floor((Math.random() * 2) + 1);
    if(this.imgR===1)
        this.imagen.src=this.imgAguila1;
    else
        this.imagen.src=this.imgAguila2;
    //this.imagen.src=imgAguila;
    this.type="aguila";
    this.sonido =  document.createElement('audio');
    this.sonido.setAttribute('src', 'sonidos/muerteAguila.wav');
    this.vivo = true;

    this.morir = function () {
        this.vivo=false;
        if(this.imgR===1)
            this.imagen.src=this.imgAguila1M;
        else
            this.imagen.src=this.imgAguila2M;
    };
}