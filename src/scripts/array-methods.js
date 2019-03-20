const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

console.log(planets)

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

const planetEl = document.getElementById("planets")

planets.forEach(planet => {
  planetEl.innerHTML += `
     <section>${planet}</section>`
     planetEl.innerHTML += "<hr/>"
});


/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

// let capitalProject = planets.map(([planet]) => planet.toUpperCase());


// const capitalProject = planets.map(planet =>
// 		planet[0].toUpperCase() + planet.slice(1).toLowerCase()
// );

// console.log(capitalProject)

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const containsE = planets.filter(planet => {

  let planetWithAnE = false;

  if (planet.includes("e")){
    planetWithAnE = true;
  }
  return planetWithAnE
});

console.log(containsE);