var goal = Math.floor(Math.random() * 100);
var currentScore = 0;


$("#goal").text(goal);
$("#currentScore").text(currentScore)

$("#red").on("click", function() {
  addRed()
})

var plusRed = Math.floor(Math.random() * 100);
function addRed(){
  console.log(plusRed);
  currentScore += plusRed;
  console.log("red " + currentScore)
}
