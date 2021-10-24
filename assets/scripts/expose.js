// expose.js
const jsConfetti = new JSConfetti();
window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById("horn-select");
  const audioSlider = document.getElementById("volume-controls");
  const playButton = document.querySelector("button");
  

  hornSelect.addEventListener('change', (event) => {
    changeHorn(hornSelect.value);
  });
  audioSlider.addEventListener('change', (event) => {
    changeAudio();
  });
  playButton.addEventListener('click', (event) => {
    buttonClicked();
  })
}

function changeHorn(horn){
  if(horn == "air-horn"){
    document.querySelector("img").src = "assets/images/air-horn.svg";
    document.querySelector(".hidden").src = "assets/audio/air-horn.mp3";
  }
  else if(horn == "car-horn"){
    document.querySelector("img").src = "assets/images/car-horn.svg";
    document.querySelector(".hidden").src = "assets/audio/car-horn.mp3";
  }
  else if(horn == "party-horn"){
    document.querySelector("img").src = "assets/images/party-horn.svg";
    document.querySelector(".hidden").src = "assets/audio/party-horn.mp3";
  }
}

function changeAudio(){
  let volume = document.getElementById("volume").value;
  if(volume == 0){
    document.querySelector("#volume-controls > img").src = "assets/icons/volume-level-0.svg";
  }
  else if(volume < 33){
    document.querySelector("#volume-controls > img").src = "assets/icons/volume-level-1.svg";
  }
  else if(volume < 67){
    document.querySelector("#volume-controls > img").src = "assets/icons/volume-level-2.svg";
  }
  else{
    document.querySelector("#volume-controls > img").src = "assets/icons/volume-level-3.svg";
  }
}

function buttonClicked(){
  let horn = document.getElementById("horn-select").value;
  if(horn != 'select'){
    const audio = document.querySelector(".hidden");
    audio.volume = document.getElementById("volume").value/100;
    audio.play();
    if(horn == 'party-horn'){
      jsConfetti.addConfetti();
    }
  }
}