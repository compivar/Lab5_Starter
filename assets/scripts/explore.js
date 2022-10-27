// explore.js

window.addEventListener('DOMContentLoaded', init);


function init() {
  // TODO
  window.speechSynthesis.onvoiceschanged = function() {
    let voices = window.speechSynthesis.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      document.getElementById("voice-select").appendChild(option);
    }
  }
  let textArea = document.getElementById("text-to-speak");
  let textInput = "";
  let button = document.querySelector("button");
  let image = document.querySelector("img");
  button.addEventListener('click', function(){
    textInput = textArea.value;
    if(textInput == ""){
      return;
    }
    const utterThis = new SpeechSynthesisUtterance(textInput);
    let select = document.getElementById("voice-select");
    let selectedVoice = select.selectedOptions[0].getAttribute("data-name");
    let voices = window.speechSynthesis.getVoices();

    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedVoice) {
        utterThis.voice = voices[i];
        break;
      }
    }
    window.speechSynthesis.speak(utterThis);
    utterThis.addEventListener('start', function() {
      image.src = "assets/images/smiling-open.png";
    });
    utterThis.addEventListener('end', function() {
      image.src = "assets/images/smiling.png";
    });
  })


}
