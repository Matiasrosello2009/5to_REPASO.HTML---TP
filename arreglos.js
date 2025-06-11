//----------TRABAJO PRACTICO N. 1----------// 

let colores = ['rojo', 'azul', 'verde', 'amarillo', 'naranja']; 

console.log(colores[0])

console.log(colores.length[-1]);

console.log('El tamaño del arreglo es ' + colores.length[5])

colores.push('Violeta')
console.log(colores[colores.length -1])

colores.unshift('bordo')
console.log(colores[0])

colores.pop()
console.log(colores)

colores.shift()
console.log(colores)

colores[1] = 'marron' 
console.log(colores)

for (let index = 0; index < colores.length; index++){
    console.log(colores[index])
}

// ----------TRABAJO PRACTICO N.2----------// 

let frutas = ['sandia', 'naranja', 'uva']

frutas.push('frutilla')
console.log(frutas[frutas.length -1])

frutas.unshift('banana')
console.log(frutas[0])

frutas.pop()
console.log(frutas)

frutas.shift()
console.log(frutas)

console.log('El tamaño del arreglo es ' + frutas.length[3])

let nombres = ['Mati', 'Daniel', 'Abel', 'Miguel']

console.log('El tamaño del arreglo es ' + nombres.length[4])

nombres.push('Roberto', 'Álvaro')
console.log(nombres[nombres.length -1])

let numeros = ('1', '2', '3', '4', '5')

for (let index = 0; index < numeros.length; index++){
    console.log(numeros[index])
}

let suma = 0; 

for (let i = 0; i < numeros.length; i++){
    suma += numeros[i];
}

console.log("La suma de los números es:", suma);

let palabras = [];

for (let i = 0; i < 5; i++) {
    let palabra = prompt(`Escribe la palabra #${i + 1}:`);
    palabras.push(palabra); 
}

console.log("Las palabras ingresadas son:", palabras); 

// ----------TRABAJO PRACTICO N.3----------// 

let animales = ["perro", "gato", "conejo", "loro"]; 

for (let i = 0; i < 5; i++){
    console.log(animales)
}

for (let i = 0; i < animales.length; i += 2) {
if (i % 2 === 0){
    console.log(animales[i]);
    }
}

let numerosTP3 = [4, 7, 2, 9, 5];

for (let i = 0; i < numerosTP3.length; i++){
    suma += numerosTP3[i];
}
console.log("La suma de los números es:", suma);

let datos = [3, 6, 1, 8];

let multiplicacion = []
for(let i = 0; i < numerosTP3.length; i++){
    multiplicacion.push(datos[i] * 2)
}
console.log(multiplicacion);
