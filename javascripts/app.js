
// ======================
let rover = {
  direction: "N",
  x: 0,
  y: 0
}
// ======================
function turnLeft(rover) {
  if (rover.direction === 'N') {
    rover.direction = 'W';
  } else if (rover.direction === 'W') {
    rover.direction = 'S'
  } else if (rover.directrion === 'S') {
    rover.direction = 'E';
  } else if (rover.direction === 'E') {
    rover.direction = 'N'
  }

  console.log("turnLeft was called!");
}

function turnRight(rover){
  if (rover.direction === 'N') {
    rover.direction = 'E';
  } else if (rover.direction === 'E') {
    rover.direction = 'S'
  } else if (rover.directrion === 'S') {
    rover.direction = 'W';
  } else if (rover.direction === 'W') {
    rover.direction = 'N'
  }

  console.log("turnRight was called!");
}

function moveForward(rover){
  console.log("moveForward was called")
}
//=============
function moveForward(rover){
  if (rover.direction === "N") {
    rover.y--; 
  } else if (rover.direction === "E") {
    rover.x++;
  } else if (rover.direction === "S") {
    rover.y++;
  } else if ( rover.direction === "W") {
    rover.x--;
  }
}

console.log(`(${rover.x} , ${rover.y})`)
//=========================

//rrrffrfferlferlfrlfrlfrlrfl

function commands(steps){
  for (let i = 0; i < steps.length; i++) {
    console.log(steps.charAt[i]);
  }
}

commands('rlflrlfffrrllr')

let currentChar = steps.charAt(i)

if (currentChar === "l"){
  turnLeft(rover);
} else if (currentChar === "r"){
  turnRight(rover);
} else if (currentChar === "f"){
  moveForward(rover);
}

rover.travelLog.push(currentChar);

console.log(rover.travelLog)