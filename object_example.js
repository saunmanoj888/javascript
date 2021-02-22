function buildPlanet(name, size, isHabitable) {
    return {
      name,
      size,
      isHabitable,
    };
  }

let earth = buildPlanet("Earth", "6371 km", true)

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
