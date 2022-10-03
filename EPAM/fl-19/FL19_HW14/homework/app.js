fetch('https://rickandmortyapi.com/api/character/”character')
.then(response => response.json())
.then(data => makeCards(data.results))

function makeCards(charactersArray){
const root = document.getElementById('root');
console.log(charactersArray)
charactersArray.forEach(caracter => {
    newFunction(caracter);

    // eslint-disable-next-line no-unused-vars
    function newFunction(_caracter) {
        root.innerHTML = root.innerHTML + 
        '<div><h2>${caracter.name}</h2><img src $ {...caracter.img} /></div>; "";'
    }
});
}