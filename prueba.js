// num = 911;

// var array = num.toString();

// arrayseparado = array.split('');


// if (arrayseparado[0]=='9'){
//    console.log (true);
// }else
// console.log (false);


// array1 = [2,2,2];

// var comparar = array1[0];
// var suma = true;

// for(var i=0; i<array1.length; i++){

//     if(comparar !== array1[i]){
//     suma = false;
//        break;
//     }
// }
// console.log(suma);


// Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var num =50;

   
var arrayRe=[];
   for(var i=0; i<=10; i++){
    num=num+2;
    arrayRe.push(num);
   }
   console.log(arrayRe);