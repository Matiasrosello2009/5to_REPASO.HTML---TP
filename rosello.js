//EXAMEN ARREGLOS Y REPETICIONES - 5TO AÑO
//ACTIVIDAD 1

let notas =[10, 10, 9, 9, 8, 8, 9, 10, 10, 9, 9, 8, 8];
sumaNotas = 0; 

for(let indice = 0; indice < notas.length; indice++){
    sumaNotas += notas[indice];
}
let promedioNotas = sumaNotas / notas.length; 
console.log('El promedio de tus notas es ' + promedioNotas); 

//ACTIVIDAD 2

let numerosPares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
let indice = 0;

while(indice < numerosPares.length){
    if(numerosPares % 1 == 0){
        console.log(numerosPares)
    }
    indice++
}

//ACTIVIDAD 3

let autos = ['gol','clio','polo','fiesta','HB20','palio'];
for(let indice = 0; indice < autos.length; indice++) {
    if(autos[indice] == 'fiesta'){
        console.log('El auto se encuentra en el listado en la posición ' + indice)
    }else{
        console.log('El auto no se encuentra en el arreglo. ')
    }
}

//ACTIVIDAD 4

let numeros = [10,6,77,2,5];
let resultado = [];

for(let indice = 0; indice < numeros.length; indice++){
    resultado.push(numeros[indice] * numeros[indice])
}
console.log(resultado)