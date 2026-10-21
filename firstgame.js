function userChoice() {
  let u = prompt("please choose rock , paper or cessor");
  return u;
}

function computerChoice() {
  let computer = Math.random();
  let a = computer * 3 + 1;
  a = Math.floor(a);
  if (a == 1) {
    return "rock";
  } else if (a == 2) {
    return "paper";
  } else if (a == 3) {
    return "cessor";
  }
}

function playRound(u, c) {
  if (u == c) {
    return "no winer this time";
  } else if (u == "paper" && c == "rock") {
    return "player win this round";
  } else if (u == "rock" && c == "cessor") {
    return "player win this round";
  } else if (u == "cessor" && c == "paper") {
    return "player win this round";
  } else {
    return "computer win in this round";
  }
}

function playGame() {
  let i = 0;
  let player = 0,
    computer = 0,
    draw = 0;
  for (i = 0; i < 5; i++) {
    let a = userChoice();
    let b = computerChoice();
    let v = playRound(a, b);
    if (v == "player win this round") {
      player++;
    } else if (v == "computer win in this round") {
      computer++;
    } else {
      draw++;
    }

    console.log(a, b, v);
  }
  if (player > computer) {
    console.log(`player win so many rounds${player}`);
  } else if (computer > player) {
    console.log(`computer win so many rounds${computer}`);
  } else console.log(`draw happen this many time ${draw}`);
}

playGame();
