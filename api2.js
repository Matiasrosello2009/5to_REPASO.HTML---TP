const personajes = [
    {
      nombre: "Rick Sanchez",
      estado: "Vivo",
      especie: "Humano",
      imagen: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    },
    {
      nombre: "Morty Smith",
      estado: "Vivo",
      especie: "Humano",
      imagen: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
    },
    {
      nombre: "Summer Smith",
      estado: "Vivo",
      especie: "Humano",
      imagen: "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
    },
    {
      nombre: "Beth Smith",
      estado: "Vivo",
      especie: "Humano",
      imagen: "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
    },
    {
      nombre: "Jerry Smith",
      estado: "Vivo",
      especie: "Humano",
      imagen: "https://rickandmortyapi.com/api/character/avatar/5.jpeg"
    }
  ];
  
  const contenedor = document.getElementById("cards-container");
  
  personajes.forEach(personaje => {
    const card = document.createElement("div");
    card.className = "card";
  
    card.innerHTML = `
      <img src="${personaje.imagen}" alt="${personaje.nombre}">
      <div class="card-body">
        <div class="card-title">${personaje.nombre}</div>
        <div class="card-info">Estado: ${personaje.estado}</div>
        <div class="card-info">Especie: ${personaje.especie}</div>
      </div>
    `;
  
    contenedor.appendChild(card);
  });
  