
const bpm1 = 60;
const bpmDiff = 1;

intervalMaker(bpm1, bpmDiff);


function intervalMaker(bpm1, bpmDiff) {
  
  const firstMeasureMilliseconds = bpmConverter(bpm1);
  const bpm2 = bpm1 + bpmDiff;
  let secondMeasureMilliseconds = bpmConverter(bpm2);
  console.log(secondMeasureMilliseconds);

  measure('measure 1', firstMeasureMilliseconds, secondMeasure);

  function secondMeasure() {
    measure('measure 2', secondMeasureMilliseconds);
  }
}

function measure(string, time, func) {
  let count = 0;
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
  console.log(measure);
  console.log((new Date()).toISOString());
}

function bpmConverter(bpm) {
  return 60000 / bpm;
}
