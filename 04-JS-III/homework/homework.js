// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
   return array[array.length - 1]; //toma el largo de la lista y le resta una asi da cómo ultima posición del arreglo.
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:

  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var sumandoUno = [];
   for (var n = 0; n < array.length; n ++){
      sumandoUno[n] = array[n] + 1;
   }

   return sumandoUno;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
   array[array.length] = elemento;
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var cadena = '';
  cadena = palabras.join( ' ');
  return cadena;
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  
  for(var n = 0; n < array.length; n++){
    if (array[n] === elemento){
      return true;
    } 
  }
  return false;
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var sumar = 0;
  for(var n = 0; n < numeros.length; n++) {
    sumar += numeros[n];
  }
  return sumar;

}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var promedio = 0;
  var suma = 0;
  for(var n = 0; n < resultadosTest.length; n++){
    sumaNumeros = agregarNumeros(resultadosTest);
  }
   Math.round(promedio = sumaNumeros / resultadosTest.length);
  return promedio;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
    var grande = 0;
    for(var n = 0; n < numeros.length; n++){
      if (numeros[n] > grande){
        grande = numeros[n];
      }
    }
    return grande;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
  //Las funciones avaScript tienen un objeto incorporado llamado objeto de argumentos.

//argument contiene una matriz de los argumentos utilizados cuando se llama (invoca) la función.

var produc = 1;
var unoSolito = 0;
  if (arguments.length === 0 ){
    return 0;
  }
  else if(arguments.length === 1){
   unoSolito = arguments[0];
   return unoSolito;
  }
  else{
    for(var n =0; n < arguments.length; n++){
       produc *= arguments[n];
    }
  }
  return produc;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
