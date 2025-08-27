fetch('https://pokeapi.co/api/v2/pokemon-form/157/')

.then(respuesta => respuesta.json())
.then(datos => {
    console.log(datos.results)
    for (let i = 0; i < datos.results.length; i++){
        parrafo.innerHTML = parrafo.textContent + ' ' + datos.results[i].name
        console.log(datos.results[i].name)
    }
})