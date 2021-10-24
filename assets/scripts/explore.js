// explore.js
const speechSynth = window.speechSynthesis;
const voiceSelect = document.getElementById("voice-select");
const talkButton = document.querySelector("button");
window.addEventListener('DOMContentLoaded', init);


function init() {
  // TODO
  setTimeout(() => {
    setVoices();
  }, 20);

  talkButton.addEventListener('click', (event) => {
    setTimeout(() => {
      buttonClicked();
    }, 20);
  });
}

function setVoices(){
  var voices = window.speechSynthesis.getVoices();
  
  for(let i = 0; i < voices.length; i++){
    let voice = document.createElement("option")
    voice.value = voices[i].name;
    voice.innerHTML = voices[i].name;
    voiceSelect.appendChild(voice);
  }
}
function buttonClicked(){
  let input = document.getElementById('text-to-speak').value;
  let utter = new SpeechSynthesisUtterance(input);
  var voices = window.speechSynthesis.getVoices();
  for(let i = 0; i < voices.length; i++){
    if(voices[i].name == voiceSelect.value){
      utter.voice = voices[i];
    }
  }
  speechSynth.cancel();
  speechSynth.speak(utter);
  checkSpeaking();
}

function checkSpeaking(){
  if(speechSynth.speaking){
    document.querySelector('img').src = "assets/images/smiling-open.png";
    setTimeout(() => {
      checkSpeaking();
    }, 10);
  }
  else{
    document.querySelector('img').src = "assets/images/smiling.png";
  }
}

