const pokeName = document.querySelector('#poke-name');
const btn = document.querySelector('#sub');
const pokeImg = document.querySelector('#poke-img');
const h1PokeName = document.querySelector('#poke-title');

btn.addEventListener('click', () => {
  let name = pokeName.value.toLowerCase();
  name = name.replace(/ /g, '-');
  getPokemon(name);
});

async function getPokemon(name) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    if (!res.ok) {
      throw new Error('Data not OK');
    }

    const data = await res.json();

    h1PokeName.innerHTML = data.species.name;
    pokeImg.src = data.sprites.front_default;
  } catch (error) {
    console.error(error);
  }
}
