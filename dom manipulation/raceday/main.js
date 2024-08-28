let raceNumber = Math.floor(Math.random() * 1000);
let isRegisteredEarly = true;
let ageRunner = 12;

if (ageRunner > 18 && isRegisteredEarly){
  raceNumber += 1000;
}
if (ageRunner >= 18 && isRegisteredEarly){
  console.log(`For runners over 18 who registered early, the race will start at 9:30 am. You should go first to the registration desk. Your racenumber is ${raceNumber} `);
}else if(ageRunner >= 18 && !isRegisteredEarly){
  console.log(`For runners over 18 who did not registered early, the race will start at 11:00 am.  You should go first to the registration desk. Your racenumber is ${raceNumber} `);
}

if (ageRunner < 18) {
 console.log(`For runners under 18, the race will start at 12:30 pm. Your racenumber is ${raceNumber} `);
}