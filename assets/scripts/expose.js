// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById('horn-select');
  hornSelect.addEventListener('change', function(){
    var image = document.querySelector("img");
    image.src = "assets/images/" + `${hornSelect.value}` + ".svg";
  
  });
}