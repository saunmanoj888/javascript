let animal = {
    eats: true
  };
  
  let rabbit = {
    jumps: true,
    __proto__: animal
  };
  
  for(let prop in rabbit) {
    let isOwn = rabbit.hasOwnProperty(prop);
  
    if (isOwn) {
      console.log(`Our: ${prop}`); // Our: jumps
    } else {
      console.log(`Inherited: ${prop}`); // Inherited: eats
    }
  }

  let cricket = {
    player: 11
  }

  let sport = {
      player: 12,
      __proto__: cricket
  }

  console.log(sport.player)


let user = {
    showAccess: true
};
let premiumUser = {
    ads: false
};
 
premiumUser.__proto__ = user;
 
console.log(premiumUser.showAccess);