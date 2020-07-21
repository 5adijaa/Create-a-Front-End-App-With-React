// first thing is to determine how many hours of sleep you got each night

const getSleepHours = day => {
  if (day === 'Monday') {
    return 8;
  } else if (day === 'Tuesday') {
    return 7;
  } else if (day === 'Tuesday') {
    return 7;
  } else if (day === 'Wednesday') {
    return 8;
  } else if (day === 'Thursday') {
    return 8;
  } else if (day === 'Friday') {
    return 7;
  } else if (day === 'Saturday') {
    return 10;
  } else if (day === 'Sunday') {
    return 10;
  }
};

// console.log(getSleepHours('Monday'));
// console.log(getSleepHours('Tuesday'));

const getActualSleepHours = () => {
  const totalSleep = getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
  return totalSleep;
};

const getIdealSleepHours = () => {
  const idealHours = 7;
  return idealHours * 7;
};

console.log(getActualSleepHours());
console.log(getIdealSleepHours());

const calculateSleepDept = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if(idealSleepHours === actualSleepHours){
     console.log('You got the perfect amount of sleep');
  } else if (actualSleepHours < idealSleepHours) {
  console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
  } else if (actualSleepHours > idealSleepHours) {
  console.log('You got ' + (actualSleepHours - idealSleepHours ) + ' hour(s) more sleep than you needed this week.');
  }
}

calculateSleepDept();

