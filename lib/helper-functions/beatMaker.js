
const bpm = 60;

intervalMaker(bpm);


function intervalMaker(bpm) {

  let count = 0;
  let millisec = bpmConverter(bpm);

  let id = setInterval(()=> {
    if(count === 4) clearInterval(id);
    else {
      firstMeasure();
      count++;
    }
  }, millisec);

  function firstMeasure() {
    console.log('click');
  }
  
}

//function that takes a time as a paramter and returns appropriate millisecond

function bpmConverter(bpm) {
  return 60000 / bpm;
}
