const bpm1 = 120;
const bpmDiff = 90;

const answer = intervalMaker(bpm1, bpmDiff);
console.log(answer);


function intervalMaker(bpm1, bpmDiff) {
  let plusOrMinus = (Math.random() >= .49) ? true : false;

  const firstMeasureMilliseconds = bpmConverter(bpm1);
  const firstMeasureTime = firstMeasureMilliseconds * 5;

  const bpm2 = plusOrMinus ? bpm1 + bpmDiff : bpm1 - bpmDiff;
  const secondMeasureMilliseconds = bpmConverter(bpm2);
  
  openingSecond();
  beat('measure 1 beat 1', firstMeasureMilliseconds, 1);
  beat('measure 1 beat 2', firstMeasureMilliseconds, 2);
  beat('measure 1 beat 3', firstMeasureMilliseconds, 3);
  beat('measure 1 beat 4', firstMeasureMilliseconds, 4);
  beat('measure 2 beat 1', firstMeasureMilliseconds, 5);
  beat('measure 2 beat 2', secondMeasureMilliseconds, 1, firstMeasureTime);
  beat('measure 2 beat 3', secondMeasureMilliseconds, 2, firstMeasureTime);
  beat('measure 2 beat 4', secondMeasureMilliseconds, 3, firstMeasureTime);
  beat('measure 3 beat 1', secondMeasureMilliseconds, 4, firstMeasureTime);

  return plusOrMinus;
}


function openingSecond() {
  console.log('start');
}

function beat(string, beatTime, beatNum, firstMeasureTime) {
  setTimeout(()=> {
    measureLog(string);
  }, (firstMeasureTime ? firstMeasureTime + (beatTime * beatNum) + 1000 : (beatTime * beatNum) + 1000));
}

function measureLog(measure) {
  console.log(measure, (new Date()).toISOString());
}

function bpmConverter(bpm) {
  return 60000 / bpm;
}
