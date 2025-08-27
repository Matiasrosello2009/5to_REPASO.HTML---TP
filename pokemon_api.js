let container = document.getElementById("cards-container");

let obtenerPokemon = async (cantidad) => {
  for (let i = 1; i <= cantidad; i++) {
    try {
      let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      let data = await res.json();

      let nombre = data.name;
      let imagen = data.sprites.other["official-artwork"].front_default;
      let tipos = data.types.map(t => t.type.name).join(", ");

      let card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${imagen}" alt="${nombre}">
        <div class="card-body">
          <div class="card-title">${nombre}</div>
          <div class="card-info">Tipo: ${tipos}</div>
        </div>`;

      container.appendChild(card);
    } catch (error) {
      console.error(`Error cargando el Pokémon #${i}:`, error);
    }
  }
};

obtenerPokemon(20);