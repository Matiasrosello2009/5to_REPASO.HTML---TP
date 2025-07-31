//Un objeto se crea con una variable, con llaves, y "propiedades". Si se quiere poner mas de una propiedad, se deben separar con coma.

let estudiante = {
    nombre: 'Mati', 
    apellido: 'Rosello',
    DNI: 49482198, 
    direccion: 'Brandsen 3608'
}

console.log(estudiante.nombre + estudiante.apellido)

//Al momento de definir un objeto dentro de un arreglo, primero se pone corchetes y dentro van las llaves en donde se va a definir el objeto. 

let estudiantes = [
    {
        nombre: 'Yo',
        apellido: 'Mismo',
        edad: '16'
    },
    {
        nombre: 'YoX2',
        apellido: 'Otra vez',
        edad: '17'
    },
    {
        nombre: 'YoX3',
        apellido: 'Again',
        edad: '18'
    },
    {
        nombre: 'YoX4',
        apellido: 'De Nuevo',
        edad: '19'
    },
    {
        nombre: 'YoX5',
        apellido: 'Acá',
        edad: '20'
    }
]

for (let i=0; i < estudiantes.length; i++){
    console.log(estudiantes[i].apellido + ' ' + estudiantes[i].nombre)
}