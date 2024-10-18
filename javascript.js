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
  
  for (let i = 0; i < eyeballGridPos.length; i++) {
    eyeballGridPos[i] = round((calculatePos(mousePos[0] ,mousePos[1])[i] * eyeballStrength), gridSize)
    eyeGridPos[i] = round((calculatePos(mousePos[0] ,mousePos[1])[i] * eyeStrength), gridSize)
  }

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