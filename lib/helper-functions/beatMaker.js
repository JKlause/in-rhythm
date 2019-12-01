
const time = 1000;


intervalMaker(time);


function intervalMaker(time) {
  let count = 0;

  let id = setInterval(()=> {
    measure();
    count++;
    if(count === 4) clearInterval(id);
  }, time);

  function measure() {
    console.log('click');
  }
  
}

