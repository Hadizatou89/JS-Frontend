var programming_languages = [
	"python",
	"javascript",
	"mongodb",
	"json",
	"java",
	"html",
	"css",
	"c",
	"csharp",
	"golang",
	"kotlin",
	"php",
	"sql",
	"ruby"
]

let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord() {
  answer = programming_languages[Math.floor(Math.random() * programming_languages.length)];
}

function generateButtons() {
  let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
      <button
        class="btn btn-lg btn-success m-2 a"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('keyboard').innerHTML = buttonsHTML;
}




let dessin = document.getElementById('dessin')
let dah = dessin.getContext('2d');
    dah.lineWidh = 15;

function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute('disabled', true);

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++;
    updateMistakes();
    checkIfGameLost();
    updateHangmanPicture();
  }

  console.log(mistakes);

switch(mistakes){
  case 0:
  break;
  case 1:      
      console.log(mistakes);
      dah.beginPath();
      dah.strokeStyle = 'rgb(150,195,11)';
      dah.moveTo(60,130);
      dah.lineTo(243, 130);
      dah.stroke();
  break;

  case 2:
      dah.beginPath();
      dah.strokeStyle = 'orange';
      dah.moveTo(240, 20);
      dah.lineTo(240, 130);
      dah.stroke();

      dah.beginPath();
      dah.strokeStyle = 'rgb(252,122,7)';
      dah.moveTo(137, 20);
      dah.lineTo(243, 20);
      dah.stroke();
  break;

  case 3:
      dah.beginPath();
      dah.strokeStyle = 'rgb(226,47,111)';
      dah.moveTo(140, 20);
      dah.lineTo(140, 50);
      dah.stroke();
  break;

  case 4:
      dah.beginPath();
      dah.arc(140, 50, 11, 0, Math.PI*2,true);
      dah.closePath();
      dah.fillStyle = 'rgb(246,97,15)';
      dah.fill();
  break;


  case 5:
      dah.beginPath();
      dah.strokeStyle = 'orange';
      dah.moveTo(140, 60);
      dah.lineTo(120, 70);
      dah.stroke();

      dah.beginPath()
      dah.strokeStyle = 'borange';
      dah.moveTo(140, 60);
      dah.lineTo(160, 70);
      dah.stroke();

      dah.beginPath();
      dah.strokeStyle = 'rgb(255,192,7)';
      dah.moveTo(140, 58);
      dah.lineTo(140, 90);
      dah.stroke();
  break;

  case 6:
      dah.beginPath();
      dah.strokeStyle = 'red';
      dah.moveTo(140, 90);
      dah.lineTo(120, 100);
      dah.stroke();
      
      dah.beginPath();
      dah.strokeStyle = 'red';
      dah.moveTo(140, 90);
      dah.lineTo(160, 100);
      dah.stroke();     
  break;
  default: alert('Vous avez perdu la partie !!')

}

}

function updateHangmanPicture() {

  //document.getElementById('hangmanPic').src = './images/' + mistakes + '.jpg';
}

function checkIfGameWon() {
  if (wordStatus === answer) {
    document.getElementById('keyboard').innerHTML = 'You Won!!!';
  }
}

function checkIfGameLost() {
  if (mistakes === maxWrong) {
    document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer;
    document.getElementById('keyboard').innerHTML = 'You Lost!!!';
  }
}

function guessedWord() {
  wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById('wordSpotlight').innerHTML = wordStatus;
}

function updateMistakes() {
  document.getElementById('mistakes').innerHTML = mistakes;
}
function change() {
  dah.clearRect(0, 0, dessin.width, dessin.height);

  
}
function reset() {
  mistakes = 0;
  guessed = [];
  //document.getElementById('hangmanPic').src = './images/0.jpg';

  randomWord();
  guessedWord();
  updateMistakes();
  generateButtons();
  change();
}

document.getElementById('maxWrong').innerHTML = maxWrong;

randomWord();
generateButtons();
guessedWord()
