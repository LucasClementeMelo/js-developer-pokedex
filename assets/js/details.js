const urlParams = new URLSearchParams(window.location.search);
const pokemonId = urlParams.get('pokemon');
const pokemonName = document.getElementById('pokemonName');
const pokemonDetails = document.getElementById('pokemonDetails');

pokeApi.getPokemonById(pokemonId).then((pokemon) => {
    pokemonName.textContent = pokemon.name;

    pokemonDetails.innerHTML = `
        <div class="pokemon ${pokemon.type}">
            <img src="${pokemon.photo}" alt="${pokemon.name}">

            <ol class="types">
               ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>

            <p>Número: #${pokemon.number}</p>
        </div>
    `;
});
