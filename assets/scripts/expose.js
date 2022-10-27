// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById('horn-select');
  hornSelect.addEventListener('change', function(){
    var image = document.querySelector("img");
    image.src = "assets/images/" + `${hornSelect.value}` + ".svg";
    var audio = document.querySelector("audio");
    audio.src = "assets/audio/" + `${hornSelect.value}` + ".mp3";
    audio.load();
    audio.play();
    
  });

  const volumeBar = document.getElementById("volume");

  volumeBar.addEventListener('change', function () {
    var audio = document.querySelector("audio");
    var imgList = document.querySelectorAll("img");
    var soundImg = imgList[1];
    
    if(volumeBar.value < 1) {
      soundImg.src = "assets/icons/volume-level-0.svg";
    } else if(volumeBar.value < 33) {
      soundImg.src = "assets/icons/volume-level-1.svg";
    } else if(volumeBar.value < 67) {
      soundImg.src = "assets/icons/volume-level-2.svg";
    } else {
      soundImg.src = "assets/icons/volume-level-3.svg";
    }
    audio.volume = (volumeBar.value/100);
    
  });
  

}