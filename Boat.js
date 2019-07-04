class Boat{
  constructor( c, x, y,alt,anc,nom,vel){//Propiedades
    this.Color = c;
    this.X = x;
    this.Y = y;
    this.Altura = alt;
    this.Ancho = anc;
    this.Nombre=nom;
    this.Velocidad = vel;
  }
  Dibujar(contextoDeDibujo){
        //Crear una pluma con el color
        contextoDeDibujo.strokeStyle = this.Color; //Dibujar la figura del color actual
        contextoDeDibujo.fillStyle = this.Color;//rellenar la figura del color actual
        //Crear Trapesoide
        var A = this.Ancho/2;
        var D = this.Altura/2;
        contextoDeDibujo.beginPath(); // Inicia una ruta
        contextoDeDibujo.moveTo(this.X+A+20*A,this.Y+D+45*D); 
        contextoDeDibujo.lineTo(this.X+A+40*A,this.Y+D+65*D); 
        contextoDeDibujo.lineTo(this.X+A+150*A,this.Y+D+65*D);
        contextoDeDibujo.lineTo(this.X+A+160*A,this.Y+D+45*D);
        contextoDeDibujo.lineTo(this.X+A+20*A,this.Y+D+45*D);
        contextoDeDibujo.fill();//relleno
        contextoDeDibujo.closePath();//Cierra la ruta
        //Crear cubierta
        var A = this.Ancho/2;
        var D = this.Altura/2;
        contextoDeDibujo.beginPath();// Inicia una ruta
         contextoDeDibujo.fillStyle = "gray";//rellenar la figura del color elegido
        contextoDeDibujo.moveTo(this.X+A+160*A,this.Y+D+45*D); 
        contextoDeDibujo.lineTo(this.X+A+160*A,this.Y+D+35*D); 
        contextoDeDibujo.lineTo(this.X+A+140*A,this.Y+D+35*D);
        contextoDeDibujo.lineTo(this.X+A+140*A,this.Y+D+25*D);
        contextoDeDibujo.lineTo(this.X+A+80*A,this.Y+D+25*D);
        contextoDeDibujo.lineTo(this.X+A+40*A,this.Y+D+35*D);
        contextoDeDibujo.lineTo(this.X+A+10*A,this.Y+D+35*D);
        contextoDeDibujo.lineTo(this.X+A+20*A,this.Y+D+45*D);
        contextoDeDibujo.lineTo(this.X+A+160*A,this.Y+D+45*D);
        contextoDeDibujo.fill();//relleno
        contextoDeDibujo.closePath();
        //asta
        var A = this.Ancho/2;
        var D = this.Altura/2;
        contextoDeDibujo.beginPath(); // Inicia una ruta
        contextoDeDibujo.fillStyle = "gray";//rellenar la figura del color elegido
        contextoDeDibujo.moveTo(this.X+A+100*A,this.Y+D+25*D); 
        contextoDeDibujo.lineTo(this.X+A+100*A,this.Y+D+2*D); 
        contextoDeDibujo.stroke();//relleno
        contextoDeDibujo.closePath();
        //vela
        var A = this.Ancho/2;
        var D = this.Altura/2;
        contextoDeDibujo.beginPath(); // Inicia una ruta
        contextoDeDibujo.fillStyle = "red";//rellenar la figura del color elegido
        contextoDeDibujo.moveTo(this.X+A+100*A,this.Y+D+2*D); 
        contextoDeDibujo.lineTo(this.X+A+140*A,this.Y+D+20*D); 
        contextoDeDibujo.lineTo(this.X+A+100*A,this.Y+D+20*D); 
        contextoDeDibujo.lineTo(this.X+A+100*A,this.Y+D+2*D)
        contextoDeDibujo.fill();//relleno
        contextoDeDibujo.closePath();
        //Crear ventana
        var A = this.Ancho/2;
        var D = this.Altura/2;
        contextoDeDibujo.beginPath(); // Inicia una ruta
        contextoDeDibujo.fillStyle = "white";//rellenar la figura del color elegido
        contextoDeDibujo.moveTo(this.X+A+110*A,this.Y+D+35*D); 
        contextoDeDibujo.lineTo(this.X+A+110*A,this.Y+D+28*D); 
        contextoDeDibujo.lineTo(this.X+A+80*A,this.Y+D+28*D); 
        contextoDeDibujo.lineTo(this.X+A+50*A,this.Y+D+35*D); 
        contextoDeDibujo.lineTo(this.X+A+110*A,this.Y+D+35*D);
        contextoDeDibujo.fill();//relleno
        contextoDeDibujo.closePath();//Cierra la ruta
        //Crear ventana
        var A = this.Ancho/2;
        var D = this.Altura/2;
        contextoDeDibujo.beginPath(); // Inicia una ruta
        contextoDeDibujo.fillStyle = "white";//rellenar la figura del color elegido
        contextoDeDibujo.moveTo(this.X+A+115*A,this.Y+D+35*D); 
        contextoDeDibujo.lineTo(this.X+A+115*A,this.Y+D+28*D); 
        contextoDeDibujo.lineTo(this.X+A+130*A,this.Y+D+28*D); 
        contextoDeDibujo.lineTo(this.X+A+130*A,this.Y+D+35*D);
        contextoDeDibujo.lineTo(this.X+A+115*A,this.Y+D+35*D);
        contextoDeDibujo.fill();//relleno
        contextoDeDibujo.closePath();//Cierra la ruta
        //Crear circulo
		var radio = this.Ancho/1;
		contextoDeDibujo.beginPath();// Inicia una ruta
		contextoDeDibujo.fillStyle = "white";//rellenar la figura del color elegido
        contextoDeDibujo.arc(this.X+25*radio,this.Y+55*radio,radio=this.Altura*2,0,2*3.1416,true);
        contextoDeDibujo.fill();//relleno
        contextoDeDibujo.closePath();//Cierra la ruta
        //Crear circulo
		var radio = this.Ancho/1;
		contextoDeDibujo.beginPath();// Inicia una ruta
		contextoDeDibujo.fillStyle = "white";//rellenar la figura del color elegido
        contextoDeDibujo.arc(this.X+45*radio,this.Y+55*radio,radio=this.Altura*2,0,2*3.1416,true);
        contextoDeDibujo.fill();//relleno
        contextoDeDibujo.closePath();//Cierra la ruta
        //Crear circulo
		var radio = this.Ancho/1;
		contextoDeDibujo.beginPath();// Inicia una ruta
		contextoDeDibujo.fillStyle = "white";//rellenar la figura del color elegido
        contextoDeDibujo.arc(this.X+65*radio,this.Y+55*radio,radio=this.Altura*2,0,2*3.1416,true);
        contextoDeDibujo.fill();
        contextoDeDibujo.closePath();//Cierra la ruta

        var Base = this.Ancho/2;
        contextoDeDibujo.beginPath();// Inicia una ruta
        contextoDeDibujo.fillStyle = "black";//rellenar el texto del color elegido
        contextoDeDibujo.font = "20pt Century Gothic"; 
        contextoDeDibujo.lineWidth = 2; 
        contextoDeDibujo.fillText("Boat"+this.Nombre,this.X+15*Base,this.Y+170*Base);//relleno de letras
        contextoDeDibujo.closePath();//Cierra la ruta
        }
}