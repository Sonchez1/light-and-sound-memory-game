// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const timeInSeconds = 10;
const currentTime = Date.parse(new Date());
const deadline = new Date(currentTime + timeInSeconds*1000);
const welcome = "<br/> <br/> <br/>" + "Welcome to the Light and Sound Memory Game!" + "<br/> <br/> <br/>"
                + " There are 10 buttons and a sequence of 20 pattterns."
                + " Repeat back the pattern by pressing the buttons.\n" + "<br/>"
                + " This game helps to test your level of retention."
                + " Do not cheat by writing the pattern down!" + "<br/>"
                + " Enjoy your game and have fun!"


//Global Variables
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var mistake = 0;
var secondsLeft = 20;
var timer;


//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0,context.currentTime);
o.connect(g);
o.start(0);


function play() {
  var info = setTimeout(function() {
    document.getElementById("play").classList.add("hidden");
    document.getElementById("info").innerHTML = welcome;
  }, 50);
  
  var setup = setTimeout(function() {
    document.getElementById("info").classList.add("hidden");
    document.getElementById("setup").classList.remove("hidden");
  }, 2500);
}


function generatePattern() {
  for (let i = 0; i < 20; i++) {
    let clue = Math.floor(Math.random() * 10); //returns random integer from 0 to 9
    clue += 1;   //1 <= clue <= 10
    pattern.push(clue);
  }
  console.log(pattern);
}

function startGame(){
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  mistake = 0;
  generatePattern();
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
  setTimeout(countDown(), 1000);
}

function stopGame(){
  //initialize game variables
  gamePlaying = false;
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  clearInterval(timer);
  document.getElementById("seconds").innerHTML = "";
}

function countDown() {
  clearInterval(timer);
  secondsLeft = 21;
  timer = setInterval(function(){
    secondsLeft -= 1;
    console.log("timer in CountDown:" + secondsLeft);
    if(secondsLeft <= 0) {
      document.getElementById("setup").classList.add("toggleBackground");
      document.getElementById("buzzer").play();
      mistake += 1;
      setTimeout(function(){ 
        document.getElementById("setup").classList.remove("toggleBackground"); 
      }, 500);
      clearInterval(timer);
      repeat();
    }
    secondsLeft = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;
    document.getElementById("seconds").innerHTML = secondsLeft;
    }, 1000);
}


// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 191,
  6: 582,
  7: 743.4,
  8: 494,
  9: 305.5,
  10: 901
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025);
  tonePlaying = true;
  setTimeout(function(){
    stopTone()
    },len);
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025);
    tonePlaying = true;
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025);
  tonePlaying = false;
}


function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit");
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit");
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  clearInterval(timer);
  document.getElementById("seconds").innerHTML = "";
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i = 0; i <= progress; i++){ // for each clue that is revealed so far
    console.log(i);
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    clueHoldTime -= 10;
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
  
  document.getElementById("setup").classList.add("hidden");
  document.getElementById("info").classList.remove("hidden");
  document.getElementById("info").innerHTML = "<br/> <br/> <br/>" + "Game over. You Lost!";
  setTimeout(function() {
    document.getElementById("info").classList.add("hidden");
    document.getElementById("play").classList.remove("hidden");
    }, 2500);
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
  
  document.getElementById("setup").classList.add("hidden");
  document.getElementById("info").classList.remove("hidden");
  document.getElementById("info").innerHTML = "<br/> <br/> <br/>" + "Game over. You Won!";
  var setup = setTimeout(function() {
    document.getElementById("info").classList.add("hidden");
    document.getElementById("play").classList.remove("hidden");
    }, 2500);
}

function guess(btn){
  countDown();
  console.log("user guessed: " + btn);
  console.log("timer in guess:" + secondsLeft);
  if(!gamePlaying){
    return;
  }
  if (btn != pattern[guessCounter]) { //If incorrect Guess!
    document.getElementById("setup").classList.add("toggleBackground");
    document.getElementById("buzzer").play();
    mistake += 1;
    setTimeout(function(){ 
      document.getElementById("setup").classList.remove("toggleBackground"); 
      }, 500);
    if (mistake > 2) {
        loseGame();
    }
  } 
  if (guessCounter != progress) { //If turn not over
    guessCounter++;
  } else if (progress != pattern.length - 1) { //If not the last turn
      clearInterval(timer);
      progress++;
      playClueSequence();
      setTimeout(countDown(), 5000);
  } else {
      winGame();
  }
}

function repeat() {
 if (mistake > 2) {
      loseGame();
  } else {
      clearInterval(timer);
      playClueSequence();
  }
}