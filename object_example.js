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