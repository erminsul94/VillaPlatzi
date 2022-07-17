var teclas = { UP: 38, RIGHT: 39, DOWN: 40, LEFT: 37}; // variable con varios parametros
document.addEventListener("keydown", moverCerdo);
var cx = 200;
var cy = 200;
var t = new Array(50);
var x1 = -1;
var y1 = 0;
var cantidadVacas = aleatorio(3, 10);
var posX = 0;
var posY = 1;
//console.log(teclas);

var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var mapa = "tile.png";

var vaca = {/*url:"vaca.png",*/ cargaOK:false}
var fondo = {/*url:"tile.png",*/ cargaOK:false}
var cerdo = {cargaOK:false}

fondo.imagen = new Image(); //crea una nueva imagen y la asigna de manera automatica la variable imagen a fondo
fondo.imagen.src = mapa;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = "vaca.png";
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = "cerdo.png";
cerdo.imagen.addEventListener("load", cargarCerdos);

/*var cerdo = new Image();
cerdo.src = "cerdo.png";
cerdo.addEventListener("load", cargarCerdos);

var pollo = new Image();
pollo.src = "pollo.png";
pollo.addEventListener("load", cargarPollos);*/

function cargarFondo() {
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas() {
  vaca.cargaOK = true;
  dibujar();
}

function cargarCerdos() {
  cerdo.cargaOK = true;
  //dibujar();
}

function dibujar() {
  if (fondo.cargaOK == true) {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if (fondo.cargaOK == true && vaca.cargaOK == true) {
    //var cantidadVacas = aleatorio(5, 20);
    console.log(cantidadVacas);
    for (var v = 0; v < cantidadVacas; v++) {
      //var x = aleatorio(0, 420);
      //var y = aleatorio(0, 420);
      var x = aleatorio(0, 5) * 80;
      var y = aleatorio(0, 5) * 80;
      x1++;
      y1++;
      t[x1] = x;
      t[y1] = y;
      x1++;
      y1++;
      //console.log(t);
      //console.log(x1);
      papel.drawImage(vaca.imagen, x, y);
      //console.log(v);
      papel.drawImage(cerdo.imagen, cx, cy);
    }
  }
  /*if (fondo.cargaOK == true && cerdo.cargaOK == true && vaca.cargaOK == true) {
    papel.drawImage(cerdo.imagen, 200, 200);
  }*/
}

function aleatorio(min, max) { //funcion genera aleatorio
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min; // formula para aleatorio
  return resultado; //devuelve el resultado a la funcion
}
function moverCerdo(evento) {
  //console.log(evento.keyCode);
  var movimiento = 5; // desplazamiento

  switch (evento.keyCode) {
    case teclas.UP:
      console.log("arriba");
      papel.drawImage(fondo.imagen, 0, 0);
      papel.drawImage(cerdo.imagen, cx, cy-movimiento);
      cy = cy - movimiento;
      for (var i = 0; i < cantidadVacas; i++) {
        //console.log(i);

        console.log(posX, posY);
        papel.drawImage(vaca.imagen, t[posX], t[posY]);
        posX=posX+2;
        posY=posY+2;
        if (posY == (cantidadVacas*2)+1) {
          console.log("ingrese");
          posX=0;
          posY=1;
        }
      }
      break;
      case teclas.RIGHT:
        console.log("Derecha");
        papel.drawImage(fondo.imagen, 0, 0);
        papel.drawImage(cerdo.imagen, cx+movimiento, cy);
        cx = cx + movimiento;
        for (var i = 0; i < cantidadVacas; i++) {
          //console.log(i);

          console.log(posX, posY);
          papel.drawImage(vaca.imagen, t[posX], t[posY]);
          posX=posX+2;
          posY=posY+2;
          if (posY == (cantidadVacas*2)+1) {
            console.log("ingrese");
            posX=0;
            posY=1;
          }
        }
        break;
        case teclas.DOWN:
          console.log("arriba");
          papel.drawImage(fondo.imagen, 0, 0);
          papel.drawImage(cerdo.imagen, cx, cy+movimiento);
          cy = cy + movimiento;
          for (var i = 0; i < cantidadVacas; i++) {
            //console.log(i);

            console.log(posX, posY);
            papel.drawImage(vaca.imagen, t[posX], t[posY]);
            posX=posX+2;
            posY=posY+2;
            if (posY == (cantidadVacas*2)+1) {
              console.log("ingrese");
              posX=0;
              posY=1;
            }
          }
          break;
          case teclas.LEFT:
            console.log("arriba");
            papel.drawImage(fondo.imagen, 0, 0);
            papel.drawImage(cerdo.imagen, cx-movimiento, cy);
            cx = cx - movimiento;
            for (var i = 0; i < cantidadVacas; i++) {
              //console.log(i);

              console.log(posX, posY);
              papel.drawImage(vaca.imagen, t[posX], t[posY]);
              posX=posX+2;
              posY=posY+2;
              if (posY == (cantidadVacas*2)+1) {
                console.log("ingrese");
                posX=0;
                posY=1;
              }
            }
            break;
    default:
      console.log("no se reconoce");
  }
}
