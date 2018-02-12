function bloque(tipo) {
    this.imgLadrillo ="imagenes/Paredes/ParedLadrillo.png";
    this.imgMetal= "imagenes/Paredes/ParedMetal.png";
    this.imagen = new Image();
    this.sonido =  document.createElement('audio');
    this.type = Math.floor(Math.random());
    if (tipo === 1){
        this.type="metal";
        this.imagen.src=this.imgMetal;
        this.sonido.setAttribute('src', 'sonidos/metal.wav');
        //this.inmunidad=true;
    }
    else{
        this.type="ladrillo";
        this.imagen.src=this.imgLadrillo;
        this.sonido.setAttribute('src', 'sonidos/ladrillo.wav');
        //this.inmunidad=false;
    }
}