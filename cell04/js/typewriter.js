let i = 0;      
const speed = 50;
let txt = '';
const out = document.getElementById('demo');
    
function start() {
  demo.innerHTML = '';
  console.log('click');
  txt = randomText();
  i = 0;
  typeWriter();  
}

function typeWriter() {      
  
  if (i < txt.length) {
     document.getElementById("demo").innerHTML += txt[i];
     i++;
     setTimeout(typeWriter, speed);
  }
}

    function randomText() {
      //array splashes
      var say = [];
      say[0] = "Hi,";
      say[1] = "Hello,";
      say[2] = "Yo,";
      say[3] = "สวัสดี";
      say[4] = "เฮ่";



      //pick a random greeting
      var howmany = 11;
      var bRand = 0;
      bRand = Math.random();
      bRand = Math.floor(bRand * howmany);
      //prepare and docwrite the greeting
      sayWhat = say[bRand];
      //direct type in html p element
      //document.getElementById("splash").innerHTML ='javascript:alert("' + '");'
      // I tried to make this work but it says no.
      
      return sayWhat;
    }
setInterval(() => {
  start()
}, 3000);