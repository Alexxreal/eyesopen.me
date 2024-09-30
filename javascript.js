let currentPos = [4, 5]
let mousePos = [0, 0]
let boundBox = document.getElementById("eyeball").getBoundingClientRect()
let eyeballPosMid
let eyeballPos
let eyeballStrength = 0.15
let eyeStrength = 0.05
let gridSize = 12
const keys = [["w", 0, -12],["s", 0, 12],["a", -12, 0],["d", 12, 0]];

const round = (number, step) => {
  return Math.round(number / step) * step;
};

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

document.addEventListener('mousemove', function(e){
  eyeballPosMid = [document.getElementById("eyeball").getBoundingClientRect().x + (document.getElementById("eyeball").getBoundingClientRect().width / 2), document.getElementById("eyeball").getBoundingClientRect().y + (document.getElementById("eyeball").getBoundingClientRect().height / 2)]
  eyeballPos = [document.getElementById("eyeball").getBoundingClientRect().x, document.getElementById("eyeball").getBoundingClientRect().y]
  let eyeballGridPos = [0,0]
  let eyeGridPos = [0,0]
  var browserHeight = [screen.availWidth, screen.availHeight]
  var x = e.clientX;
  var y = e.clientY;
  /* document.getElementById("pointer").style.transform = "translate("+x+"px, "+y+"px)"; */
  /* fix this shit */
  mousePos = [x, y]
  eyeballGridPos[0] = round((calculatePos(mousePos[0] ,mousePos[1])[0] * eyeballStrength), gridSize)
  eyeballGridPos[1] = round((calculatePos(mousePos[0] ,mousePos[1])[1] * eyeballStrength), gridSize)
  eyeGridPos[0] = round((calculatePos(mousePos[0] ,mousePos[1])[0] * eyeStrength), gridSize)
  eyeGridPos[1] = round((calculatePos(mousePos[0] ,mousePos[1])[1] * eyeStrength), gridSize)
  document.getElementById("eyeball").style.transform = "translate("+ eyeballGridPos[0] +"px, "+ eyeballGridPos[1] +"px)";
  document.getElementById("eyeTrans").style.transform = "translate("+ eyeGridPos[0] +"px, "+ eyeGridPos[1] +"px)";
  console.log(document.getElementById("eyeball").style.transform = "translate("+ eyeballGridPos[0] +"px, "+ eyeballGridPos[1] +"px)")
});

function calculatePos(oriPosX, oriPosY) {
  let posY
  let posX
 
  posY = oriPosY - eyeballPosMid[1]
  posX = oriPosX - eyeballPosMid[0]
  
  return [posX ,posY];
}

function myFunction(event) {
  
  let key = event.key;
  for (let i = 0; i < keys.length; i++) {
    if (key == keys[i][0]) {
      currentPos[0] += keys[i][1]
      currentPos[1] += keys[i][2]
      document.getElementById("eyeball").style.transform = "translate("+currentPos[0]+"px, "+currentPos[1]+"px)"; 
    }
  }
}