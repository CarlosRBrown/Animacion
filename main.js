var arregloBoats;
var arregloBoats1;
var y_inicio = 0;
var x_inicio =360;

function createBoats(){
	Clear();
	//Declaración, Creación e Inicialización de un arreglo
   arregloBoats = new Array(
      new Boat("blue",360, y_inicio,2,1,2,12));
    
   var myCanvas = document.getElementById("myCanvas");
   var context = myCanvas.getContext("2d");
   for (var i = arregloBoats.length - 1; i >= 0; i--) {
      arregloBoats[i].Dibujar(context);
}
      arregloBoats1 = new Array(
          new Boat("black",x_inicio, 0,2,1,1,17));

   var myCanvas = document.getElementById("myCanvas");
   var context = myCanvas.getContext("2d");
   for (var i = arregloBoats1.length - 1; i >= 0; i--) {
      arregloBoats1[i].Dibujar(context);
   }
}
function ordenarBoatsAltura(){
   var myCanvas = document.getElementById("myCanvas");
   var context = myCanvas.getContext("2d");
   
   var n = arregloBoats.length;
	var aux;
	var aux_x_j, aux_y_j;
	var aux_x_j_1, aux_y_j_1;
	for(var i = 2; i <= n; i++){
		for(var j = 0; j <= n-i; j++){
			if(arregloBoats[j].Altura > arregloBoats[j+1].Altura){
				//Intercambio
				aux = arregloBoats[j];
				aux_x_j = arregloBoats[j].X;
				aux_y_j = arregloBoats[j].Y;
				aux_x_j_1 = arregloBoats[j+1].X;
				aux_y_j_1 = arregloBoats[j+1].Y;
				
				arregloBoats[j] =arregloBoats[j+1];
				arregloBoats[j+1] = aux;

				arregloBoats[j].X = aux_x_j;
				arregloBoats[j].Y = aux_y_j;

				arregloBoats[j+1].X = aux_x_j_1;
				arregloBoats[j+1].Y = aux_y_j_1;
			}
		}
	}


   for (var i = arregloBoats.length - 1; i >= 0; i--) {
      arregloBoats[i].Dibujar(context);
   }
}
function Clear(){
   var myCanvas = document.getElementById("myCanvas");
   if(myCanvas && myCanvas.getContext("2d"))
   var context = myCanvas.getContext("2d");
   context.fillStyle ="white";
   context.fillRect(0,0,500,500);
   context.clearRect(0,500,200,40)
}

var id1;
var t = 0;
function iniciarAnimacion(){
	id1 = setInterval(
			animacion,
			42
		);
}
function animacion(){
	
	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");
	context.fillStyle = "white";
	context.fillRect(0,0,myCanvas.width,myCanvas.height);

	arregloBoats.forEach(
		function(element) {
	  		element.Y = y_inicio + (element.Velocidad*(t/1000));

	  		//Calcular Distancia
	  		console.log(Math.sqrt(Math.pow((y_inicio +(element.Velocidad*(t/1000))),2))+(Math.pow((x_inicio-360+(element.Velocidad*(t/1000))),2)));
		}
	);
	arregloBoats.forEach(
		function(element) {
	  		element.Dibujar(context);
	  		console.log(element.Color);
	  		console.log("X: " + element.X + ", Y: " + element.Y);	
		}
	);
	arregloBoats1.forEach(
		function(element) {
	  		element.X = x_inicio - (element.Velocidad*(t/1000));
	  			
		}
	);
		arregloBoats1.forEach(
		function(element) {
	  		element.Dibujar(context);
	  		console.log(element.Color);
	  		console.log("X: " + element.X + ", Y: " + element.Y);	
		}
	);
	
	t+=42;
}
function detenerAnimacion(){
	if(id1 != null)
		clearInterval(id1);
}
var id1;
var t = 0;
var d=0;
//function CalcDistancia(){

    //Distancia Math.sqrt(((a)*2)+((b)*2))
    //Math.sqrt (element.X = x_inicio - (element.Velocidad*(t/1000))*2
    //element.Y = y_inicio + (element.Velocidad*(t/1000))*2);
	//t+=42;
	//var xd = x_inicio+t;
    //var yd = y_inicio+t;
	//d=(0);
    //document.write("Distancia = "+ d);
//}
//CalcDistancia();
