const getFormData = async (e) => {
    e.preventDefault();
    const pokemon = e.target.pokemon.value;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    const res = await fetch(url);
    const data = await res.json();

    const name = data['name'];
    const id = data.id;
    const ability = data.abilities[0].ability.name
    const imgURL = data.sprites.front_shiny;

    const myData = {
        name: name,
        id: id,
        ability: ability,
        imgURL: imgURL 

    }

    addToPage(myData)

};


const addToPage = (p) => {
    const card = document.createElement('div');
    card.innerHTML = `<div class="card" style="width: 18rem;">
    <img src="${p.imgURL}" class="card-img-top" alt="${p.name}">
    <div class="card-body">
      <h5 class="card-title">${p.name.toUpperCase()}</h5>
      <p class="card-text">Ability: ${p.ability.toUpperCase()}</p>
    </div>
  </div>`;

  const container = document.querySelector('.container');
  if (container.innerHTML !== ''){
    container.innerHTML = ''
  }
  container.append(card)
};



const myForm = document.getElementById('myForm');
myForm.addEventListener('submit', getFormData)


