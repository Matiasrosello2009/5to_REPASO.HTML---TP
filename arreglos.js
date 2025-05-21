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
