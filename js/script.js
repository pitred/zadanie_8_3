var CtoFBtn = document.getElementById('CtoF__button');
var FtoCBtn = document.getElementById('FtoC__button');
var output = document.getElementById('output__div');
var output2 = document.getElementById('output__info');
var tempC;
var tempF;
var temp;

output.innerHTML = '<br> Click the button to convert temperature' + '<br><br>';

// function that accepts the temperature
function getTemp() {
  return temp = window.prompt("Enter value");
}

// conversion function from Celsius to Farenheit
function cToF(tempC) {
  tempC = parseInt(tempC);
  if (!isNaN(tempC)) {
    return Math.round(tempC * 9 / 5 + 32) + '&#176;F';
  }
}

// conrversion function from Farenheit to Celsius
function fToC(tempF) {
  tempF = parseInt(tempF);
  if (!isNaN(tempF)) {
    return Math.round((tempF - 32) * 5 / 9) + '&#176;C';
  }
}

// function showing the state of water
function stateOfWater(tempC) {
  if (tempC < 0) {
    output2.innerHTML = ('<br> In this temperature water is changing to ...<br><br> ICE');
  } else if (tempC >= 0 && tempC < 100) {
    output2.innerHTML = ('<br> In this temperature water is ...<br><br> LIQUID');
  } else {
    output2.innerHTML = ('<br> In this temperature water is changing to ...<br><br> STEAM');
  }
}

// function showing the result of conversion
function showTemp(temp) {
  output.innerHTML = '<br> After conversion the temperature is ... <br><br>' + temp;
}

// execution of the function for the first button
CtoF__button.addEventListener('click', function () {
  tempC = getTemp();
  if (tempC === '' || tempC === null) {
    output.innerHTML = ('');
    output2.innerHTML = ('');
  } else if (isNaN(tempC)) {
    output.innerHTML = ('<br> Incorrect value');
    output2.innerHTML = ('');
  } else {
    tempF = cToF(tempC);
    showTemp(tempF);
    stateOfWater(tempC);
  }
});

//ececution of the function for the second button
FtoC__button.addEventListener('click', function () {
  tempF = getTemp();
  if (tempF === '' || tempF === null) {
    output.innerHTML = ('');
    output2.innerHTML = ('');
  } else if (isNaN(tempF)) {
    output.innerHTML = ('<br> Incorrect value');
    output2.innerHTML = ('');
  } else {
    tempC = fToC(tempF);
    showTemp(tempC);
  }
});