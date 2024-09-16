let currentPos = [4, 5]
let mousePos = [0, 0]
const keys = [["w", 0, -12],["s", 0, 12],["a", -12, 0],["d", 12, 0]];

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

function randDir() {
    let randNum = Math.random()
    if (randNum >= 0.5) {
        return 12
    }
    else {
        return -12
    }
}

document.addEventListener('mousemove', function(e){
  var browserHeight = [screen.availWidth, screen.availHeight]
  var x = e.clientX;
  var y = e.clientY;
  document.getElementById("pointer").style.transform = "translate("+x+"px, "+y+"px)";
  mousePos = [x, y]
  console.log(document.getElementById("eyeball").getBoundingClientRect())
});

function myFunction(event) {
  
  let key = event.key;
  for (let i = 0; i < keys.length; i++) {
    if (key == keys[i][0]) {
      currentPos[0] += keys[i][1]
      currentPos[1] += keys[i][2]
      document.getElementById("eyeball").style.transform = "translate("+currentPos[0]+"px, "+currentPos[1]+"px)"; 
      console.log(mousePos)
      console.log(currentPos)
    }
  }
}