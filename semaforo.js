let rojo = {activo:true};
let amarillo = {activo:false};
let verde = {activo:false};

function semaforo(){      
    if(rojo.activo){
        console.log("Rojo");
        rojo.activo = false;
        verde.activo = true;
     }
     else if(amarillo.activo){
        console.log("Amarillo");

         amarillo.activo = false;
         rojo.activo = true;
     }
     else if(verde.activo){
        console.log("Verde");

         verde.activo = false;
         amarillo.activo = true;
     }
}

module.exports = { 
    semaforo
}