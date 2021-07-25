$(document).ready(function () {
  const msg = new SpeechSynthesisUtterance();
  let voices = [];

  const voicesDropDown = $("[name='voice']");
  const options = $("[type='range'],[name='text']");
  const speakButton = $("#speak");
  const stopButton = $("#stop");

  function populateVoices() {
    msg.text = $("[name='text']").val();
    voices = this.getVoices();
    const voiceOptions = voices
      .filter(voice => voice.lang.includes("en"))
      .map((voice) => {
        return `<option value = "${voice.name}">${voice.name} ${voice.lang}</option>`;
      })
      .join("");
    voicesDropDown.html(voiceOptions);
  }

  function setVoice() {
    msg.voice = voices.find((voice) => {
      if (voice.name === $(this).val()) {
        return voice;
      }
    });
  }

  function toggle(startOver = true) {
    speechSynthesis.cancel();
    if (startOver === true) {
      msg.text = $("[name='text']").val();
      speechSynthesis.speak(msg);
    }
  }

  function setOption() {
    msg[this.name] = this.value;
  }

  speechSynthesis.addEventListener("voiceschanged", populateVoices);
  voicesDropDown.on("change", setVoice);
  speakButton.on("click", () => toggle(true));
  stopButton.on("click", () => toggle(false));
  options.each(function (index, element) {
    $(element).on("change", setOption);
  });
});
