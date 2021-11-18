function getPokemons(callback) {
  const oRec = new XMLHttpRequest();
  oRec.addEventListener("load", function () {
    const response =
      typeof this.responseText === "string"
        ? JSON.parse(this.responseText)
        : this.responseText;
    callback(response.results);
  });

  oRec.open("GET", "https://pokeapi.co/api/v2/pokemon");
  oRec.send();
}

getPokemons(function (pokemonsArray) {
  console.log(pokemonsArray);
  for (let i = 0; i < pokemonsArray.length; i++) {
    const p = pokemonsArray[i];
    console.log(p.name);
    onPokemonClick(`https://pokeapi.co/api/v2/ability/${i}`);
    // getPokemonCardHtml(p);
  }
  // let pokemonHtml = '';
  // for(let i = 0; i < pokemonsArray.length; i++){
  //     const p = pokemonsArray[i];
  //     pokemonHtml += `<li><a data-url = ${p.url} onclick = "onPokemonClick(event)" href='${p.url}'> ${p.name}</a></li>`;
  // }
  // document.getElementById('pokemon').innerHTML = pokemonHtml;
});

function onPokemonClick(e) {
  //   e.preventDefault();
  console.log(e);
  //   const pokemonUrl = e.target.dataset.url;
  // document.getElementById('pokemon-card').innerHTML = pokemonUrl;
  // your code here
  //   console.log(pokemonUrl);
  getPokemonData(e, function (data) {
    console.log(e);
    console.log(data);
    document.getElementsByClassName("pokemon-card").innerHTML =
      getPokemonCardHtml(data);
  });
}

function getPokemonData(url, callback) {
  const pokemonRec = new XMLHttpRequest();
  pokemonRec.addEventListener("load", function () {
    const response =
      typeof this.responseText === "string"
        ? JSON.parse(this.responseText)
        : this.responseText;
    callback(response);
  });
}
function getPokemonCardHtml(pokemon) {
  console.log(pokemon);
  return `<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${pokemon.url}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${pokemon.name}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>`;
}
