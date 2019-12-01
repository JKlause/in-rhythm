
const bpm1 = 120;
const bpmDiff = 90;

intervalMaker(bpm1, bpmDiff);


function intervalMaker(bpm1, bpmDiff) {
  
  const firstMeasureMilliseconds = bpmConverter(bpm1);
  const bpm2 = bpm1 + bpmDiff;
  let secondMeasureMilliseconds = bpmConverter(bpm2);

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
  console.log(measure, (new Date()).toISOString());
}

function bpmConverter(bpm) {
  return 60000 / bpm;
}
