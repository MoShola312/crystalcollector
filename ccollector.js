var goal = Math.floor(Math.random() * 100);
var currentScore = 0;
var win = 0;
var lose = 0;
var plusPurple = Math.floor(Math.random() * 40);
console.log("purle " + plusPurple);
var plusGreen = Math.floor(Math.random() * 50);
console.log("green " + plusGreen);
var plusEmerald = Math.floor(Math.random() * 30);
console.log("emerald " + plusEmerald);
var plusRed = Math.floor(Math.random() * 20);
console.log("red " + plusRed);

$("#goal").text(goal);

$("#red").on("click", function() {
  addRed()
  $("#currentScore").html(currentScore)
})

$("#green").on("click", function() {
  addGreen()
  $("#currentScore").html(currentScore)
})

$("#purple").on("click", function() {
  addPurple()
  $("#currentScore").html(currentScore)
})

$("#emerald").on("click", function() {
  addEmerald()
  $("#currentScore").html(currentScore)
})




function addRed(){
  currentScore += plusRed;
  console.log("Score " + currentScore);
  return currentScore;
}

function addGreen(){
  currentScore += plusGreen;
  console.log("Score " + currentScore);
  return currentScore;
}

function addEmerald(){
  currentScore += plusEmerald;
  console.log("Score " + currentScore);
  return currentScore;
}

function addPurple(){
  currentScore += plusPurple;
  console.log("Score " + currentScore);
  return currentScore;
}

if(currentScore === goal){
  win++;
  $("#win").html(win);
  $("#total").append("<p>You Win!</p>");
  endGame();
} else if (currentScore > goal){
  lose++;
  $("#lose").html(lose);
  $("#total").append("<p>You Lose</p>");
  endGame();
}
console.log("goal: " + goal);
console.log("C: " + currentScore);

function endGame() {
  plusPurple = Math.floor(Math.random() * 40);
  plusGreen = Math.floor(Math.random() * 50);
  plusEmerald = Math.floor(Math.random() * 30);
  plusRed = Math.floor(Math.random() * 20);
  goal = Math.floor(Math.random() * 100);
  currentScore = 0;
}
