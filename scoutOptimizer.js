var GLEVEL = document.getElementById('glevel');
var LEVEL = document.getElementById('level');
var XP = document.getElementById('xp');
var EFF = document.getElementById('eff');
var KRES = document.getElementById('kres');
var KLUCK = document.getElementById('kluck');
var RELIC = document.getElementById('relic');
var RINVESTED = document.getElementById('rinvested');
var GINVESTED = document.getElementById('ginvested');

document.getElementById("scout").onclick = function(){
    document.getElementsByTagName("BODY")[0].style.backgroundColor = "yellow";
}

window.onclick = myFunction;

// If the user clicks in the window, set the background color of <body> to yellow
function myFunction() {
    document.getElementsByTagName("BODY")[0].style.backgroundColor = "yellow";
}
