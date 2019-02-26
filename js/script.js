var CtoFBtn = document.getElementById('CtoF__button');
var FtoCBtn = document.getElementById('FtoC__button');
var output = document.getElementById('output__div');
var output2 = document.getElementById('output__info');
var state;
var tempC;
var tempF;

output.innerHTML = '<br> Click the button to convert temperature' + '<br><br>';

function convertCtoF() {
  CtoF__button.addEventListener('click', function () {
    var tempC = window.prompt("Enter temperature in C");
    if (tempC === "" || tempC === null) {
      output.innerHTML = ('');
      output2.innerHTML = ('');
    } else if (isNaN(tempC)) {
      output.innerHTML = ('<br> Incorrect value');
      output2.innerHTML = ('');
    }

    function stateOfWater() {
      if (tempC < 0) {
        state = 'In this temperature water is changing to ICE';
      } else if (tempC >= 0 && tempC < 100) {
        state = 'In this temperature water is LIQUID';
      } else {
        state = 'In this temperature water is changing to STEAM';
      }
    }
    stateOfWater();

    tempC = parseInt(tempC);
    if (!isNaN(tempC)) {
      var tempF = Math.round(tempC * 9 / 5 + 32);
      output.innerHTML = '<br> It is ' + tempF + ' &#176;' + 'F <br><br>';
      output2.innerHTML = '<br>' + state + '<br>';
    }
  });
}
convertCtoF();




function convertFtoC() {
  FtoC__button.addEventListener('click', function () {
    var tempF = window.prompt("Enter temperature in F");
    if (tempF === "" || tempF === null) {
      output.innerHTML = ('');
      output2.innerHTML = ('');
    } else if (isNaN(tempF)) {
      output.innerHTML = ('<br> Incorrect value');
      output2.innerHTML = ('');
    }

    function stateOfWater() {
      if (tempF < 32) {
        state = 'In this temperature water is changing to ICE';
      } else if (tempF >= 32 && tempF < 212) {
        state = 'In this temperature water is LIQUID';
      } else {
        state = 'In this temperature water is changing to STEAM';
      }
    }
    stateOfWater();


    tempF = parseInt(tempF);
    if (!isNaN(tempF)) {
      var tempC = Math.round((tempF - 32) * 5 / 9);
      output.innerHTML = '<br> It is ' + tempC + ' &#176;' + 'C <br><br>';
      output2.innerHTML = '<br>' + state + '<br>';
    }
  });
}
convertFtoC();