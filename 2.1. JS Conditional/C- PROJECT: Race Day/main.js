let raceNumber = Math.floor(Math.random() * 1000);

const runnerRegistered = false;

const runnerAge = 18;

if(runnerAge > 18 && runnerRegistered) {
  raceNumber += 1000;
}

if(runnerAge > 18 && runnerRegistered) {
  console.log(`For runners over 18 who registered early and have race Number ${raceNumber}. They will race at 9:30am`);
} else if(runnerAge > 18 && !(runnerRegistered)){
  console.log(`Late adults with ${raceNumber} run at 11:00 am`);
} else if(runnerAge < 18) {
  console.log(`Youth registrants with ${raceNumber} run at 12:30 am`);
} else if(runnerAge === 18){
  console.log(`Please go to the registration desk to view your race time ${raceNumber}`);
}

/* 
https://youtu.be/sSnUXjb_u-g
*/
