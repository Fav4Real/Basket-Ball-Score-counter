let homeScore = 0;
let guestScore = 0;

function homeButton1() {
  homeScore += 1;
  document.getElementById("home-score").innerText = homeScore;
}

function homeButton2() {
  homeScore += 2;
  document.getElementById("home-score").innerText = homeScore;
}

function homeButton3() {
  homeScore += 3;
  document.getElementById("home-score").innerText = homeScore;
}

function guestButton1() {
  guestScore += 1;
  document.getElementById("guest-score").innerText = guestScore;
}

function guestButton2() {
  guestScore += 2;
  document.getElementById("guest-score").innerText = guestScore;
}

function guestButton3() {
  guestScore += 3;
  document.getElementById("guest-score").innerText = guestScore;
}
