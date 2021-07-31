$(document).ready(function () {
  const holes = $(".hole");
  const scoreBoard = $(".score");
  const moles = $(".mole");
  const button = $("button");
  let score = 0;
  let timeup = false;
  let clicked = false;
  let lastHole;

  function randTime(min, max) {
    return (Math.random() * (max - min) + min).toFixed(0);
  }

  function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
      return randomHole(holes);
    }
    lastHole = hole;
    return hole;
  }

  function peep() {
    const time = randTime(200, 2000);
    const hole = randomHole(holes);
    $(hole).addClass("up");

    setTimeout(() => {
      $(hole).removeClass("up");
      clicked = false;
      if (!timeup) peep();
    }, time);
  }

  function bonk(e) {
    if (!e.which) return;
    if (clicked) return;
    clicked = true
    score++;
    scoreBoard.text(score);
  }

  function startGame() {
    scoreBoard.text("0");
    timeup = false;
    score = 0;
    peep();
    setTimeout(() => (timeup = true), 10000);
  }

  button.on("click", startGame);
  moles.on("click", bonk);
});
