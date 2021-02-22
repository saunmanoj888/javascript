function buildPlanet(name, radius, isHabitable) {
    return {
      name,
      radius,
      isHabitable,
    };
  }

let earth = buildPlanet("Earth", "6371 km", true)
let mars = buildPlanet("Mars", "3389.5 km", false)

if (earth.isHabitable) {
    for(key in earth){
        console.log(`${key}=>${earth[key]}`);
    }
}

// Clone an  object into new object variable

let earthClone = {};

Object.assign(earthClone, earth)

console.log(earthClone);

console.log(earth == earthClone)
console.log(earth === earthClone)

// Clone object using spread operator
let marsClone = {...mars};
console.log(marsClone);
console.log({...mars});
console.log(mars === marsClone)
