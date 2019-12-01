
const bpm1 = 120;
const bpmDiff = 90;

const answer = intervalMaker(bpm1, bpmDiff);
console.log(answer);

function intervalMaker(bpm1, bpmDiff) {
  
  const plusOrMinus = (Math.random() >= .49) ? true : false;

  const firstMeasureMilliseconds = bpmConverter(bpm1);
  let bpm2 = plusOrMinus ? bpm1 + bpmDiff : bpm1 - bpmDiff;
  if(bpm2 <= 0) bpm2 = 0;
  const secondMeasureMilliseconds = bpmConverter(bpm2);


  measure('measure 1', firstMeasureMilliseconds, secondMeasure);

  function secondMeasure() {
    measure('measure 2', secondMeasureMilliseconds);
  }

  return plusOrMinus ? 'faster' : 'slower';
}

function measure(string, time, func) {
  measureLog(string);
  let count = 1;
  
  let id = setInterval(()=> {
    if(count === 4) {
      if(func) func();
      clearInterval(id);
    }
    else {
      measureLog(string);
      count++;
    }
  }, time);
}


function measureLog(measure) {
  console.log(measure, (new Date()).toISOString());
}

function bpmConverter(bpm) {
  return 60000 / bpm;
}
