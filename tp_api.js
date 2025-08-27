let titulo = document.querySelector('#titulo');
let imagen = document.querySelector('#imagen');
let boton = document.querySelector('#boton');

boton.onClick = function (){
    fetch('https://pokeapi.co/api/v2/pokemon-form/157/')
        .then(respuesta => respuesta.json())
        .then(datos => {
           console.log(datos)

            titulo.textContent = datos.name + ' #' + datos.id
            imagen.src = datos.sprites.front_shiny
        })
}

fetch('https://pokeapi.co/api/v2/pokemon-form/157/')

.then(respuesta => respuesta.json())
.then(datos => {
    console.log(datos.results)
    for (let i = 0; i < datos.results.length; i++){
        parrafo.innerHTML = parrafo.textContent + ' ' + datos.results[i].name
        console.log(datos.results[i].name)
    }
})