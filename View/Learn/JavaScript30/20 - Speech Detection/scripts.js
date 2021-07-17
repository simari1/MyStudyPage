$(document).ready(function () {
  window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.lang = "ja-jp";
  recognition.interimResults = true;

  let p = $("<p editable>");
  let words = $(".words");

  recognition.addEventListener("result", e => {
    console.log(e.results);
    let transcript = [...e.results]
    .map(r => r[0].transcript)
    .join(" ");

    p.text(transcript);

    if (e.results[0].isFinal) {
      p = $("<p>");
      words.append(p);
    }
  });

  recognition.addEventListener("end", recognition.start);
  recognition.start();
});
