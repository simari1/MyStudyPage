$(document).ready(function () {
  const hero = $(".hero");
  const text = $("h1");
  const walk = 100;

  function shadow(e) {
    const width = hero[0].offsetWidth;
    const height = hero[0].offsetHeight;
    
    let x = e.offsetX;
    let y = e.offsetY;

    if(this !== e.target){
      x = x + e.target.offsetLeft;
      y = y + e.target.offsetTop;
    }
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((x / height * walk) - (walk / 2));

    text.css("text-shadow", `
    ${xWalk}px ${yWalk}px 0 red,
    ${xWalk * -1}px ${yWalk * -1}px 0 green
    `);
  }

  hero.on("mousemove", shadow);
});
