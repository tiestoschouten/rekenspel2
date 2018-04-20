const wrapper = document.getElementById('wrapper');
const myAssignment = document.getElementById('myAssignment');
const feedback = document.getElementById('feedback');

let myAnswer = document.getElementById('myAnswer');
let rightAnswer;
let mySum;
let sound = new Audio();


function makeSum() {
  var a = Math.floor(Math.random() * 9 + 1);
  var b = Math.floor(Math.random() * 9 + 1);
  mySum = a + " x " + b;
  myAnswer.value = "";
  rightAnswer = a * b;
  myAssignment.innerHTML = mySum;
  myAnswer.focus();

}



function keyPressed(evt) {
  if(evt.keyCode == 13) {
    if(myAnswer.value == rightAnswer) {
      feedback.src = "images/welldone.png";
      sound.src = "audio/welldone.mp3";
      sound.play();
      alert('Goed');
    } else {
      feedback.src = "images/youfailed.jpg";
      sound.src = "audio/darn.mp3";
      sound.play();
      alert('Fout');
    }
    window.setTimeout(makeSum, 2000);
  }
}

myAnswer.addEventListener('keydown', keyPressed, false);

function waiting() {

}

makeSum();
