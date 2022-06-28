let nonTraction = 200;
let positionTrain = 0;
let animation;

const moveTrain = document.getElementById("train");
moveTrain.addEventListener("click", accelerer);

const stopTrain = document.getElementById("btnStop");
stopTrain.addEventListener("click", arreter);

function accelerer() {
  if (nonTraction > 100) {
    nonTraction -= 370;
  }

  console.log("Vitesse du train: " + nonTraction);

  clearInterval(animation);
  animation = setInterval(frame, nonTraction);
}

function frame() {
  positionTrain += 3;
  moveTrain.style.left = positionTrain + "px";
  console.log(positionTrain);
  testerPosition(positionTrain);
}

function testerPosition(posActuelle) {
  if (posActuelle === 370) {
    alert("Boum ! Trop tard !");
    console.log("Trop tard !");
    clearInterval(animation);
  }
}

function arreter() {
  if (positionTrain < 370) {
    clearInterval(animation);
    alert("Ouf ! Bravo !");
  }
}
