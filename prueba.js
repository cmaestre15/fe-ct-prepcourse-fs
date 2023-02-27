// num = 911;

// const { crearGato } = require("./M06 JavaScript Objetos/homework");

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
   //var num =50;

   
// var arrayRe=[];
//    for(var i=0; i<=10; i++){
//     num=num+2;
//     arrayRe.push(num);
//    }
//    console.log(arrayRe);


//THIS
// var mascota = {
//    animal: 'Perro',
//    raza: 'Ovejero Alemán',
//    amistoso: true,
//    dueño: 'María López',
//    info: () => {
//       console.log('Mi perro es un  ' + this.dueño);
//    },
// };

// mascota.info();



   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:

   // var nombre ="carlos";
   // var edad = 15; 
   // var objeto = {};
   // objeto.nombre = nombre;
   // objeto.edad = edad;
   // objeto.meow = function(){
   //    return ("Meow!");
   // }
   // console.log(objeto);

   
   // objeto.meow();

   // var propiedad = "prueba";
   // var objetop = {nombre: "carlos", propiedad: "prueba"};
   // console.log(objetop);
   // objetop.hasOwnProperty(propiedad);
   // console.log(objetop.hasOwnProperty(propiedad));

   // function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   //    // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   //    // Cada usuario tiene una propiedad llamada "esPremium".
   //    // Define esta propiedad de todos los usuarios como true.
   //    // Retornar el arreglo.
   //    // Tu código:
   //    for (var i = 0; i < objetoMuchosUsuarios.length; i++) {
   //       objetoMuchosUsuarios[i].esPremium = true;
   //    };
   //    return objetoMuchosUsuarios;
   // }

// var palabra = "carlos";
// return reverseString = str => str.split("").reverse().join("");
// class Persona {
   // Crea el constructor de la clase "Persona".
   // Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio".
   // Debe tener un método llamado "detalle" que nos devuelva un objeto con las propiedades de la persona y
   // sus valores.

//       constructor (nombre, apellido, edad, domicilio) {
//          this.nombre = nombre;
//          this.apellido= apellido;
//          this.edad = edad;
//          this.domicilio = domicilio;
//       }
       
//       detalle (){
//          var Objeto = {nombre: this.nombre, apellido: this.apellido, edad: this.edad, domicilio: this.domicilio}
         
//       return Objeto;

// }


// var eche =[1, 2, 3, 4, 5];
// var suma=0;
      
// for(let  i=0; i<eche.length; i++){

//       suma = suma+eche[i];

//  }
//  console.log(suma);
      
// var array=[1,2,3,4,5];
// var tabla =[];
// function  cb (a){
// a =a+2;
// }
// for(let i=0; i<array.length; i++){

//    var b = array[i];

//    console.log(b);

//    var a = cb(b);
//    console.log(a);
//    tabla.push(a);
// }



