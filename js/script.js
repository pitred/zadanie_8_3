var CtoFBtn = document.getElementById("CtoF__button");
var FtoCBtn = document.getElementById("FtoC__button");
var outputCtoF = document.getElementById("output-temp");
var outputFtoC = document.getElementById("output-water");

// function that accepts the temperature
function getTemp() {
  return window.prompt("Enter value");
}

// conversion function from Celsius to Farenheit
function cToF(tempC) {
  tempC = parseInt(tempC);
  if (!isNaN(tempC)) {
    return Math.round((tempC * 9) / 5 + 32) + "&#176;F";
  }
}

// conrversion function from Farenheit to Celsius
function fToC(tempF) {
  tempF = parseInt(tempF);
  if (!isNaN(tempF)) {
    return Math.round(((tempF - 32) * 5) / 9) + "&#176;C";
  }
}

// function showing the state of water
function stateOfWater(tempC) {
  if (tempC < 0) return "<br> In this temperature water is changing to ...<br><br> ICE";
  else if (tempC >= 0 && tempC < 100) return "<br> In this temperature water is ...<br><br> LIQUID";
  else return "<br> In this temperature water is changing to ...<br><br> STEAM";
}

// function showing the result of conversion
function showTemp(temp, elem) {
  elem.innerHTML = "<br> After conversion the temperature is ... <br><br>" + temp;
}
// function showing info text
function showText(text, elem) {
  elem.innerHTML = '<br> ' + text + '<br><br>' + elem.innerHTML;
}

// execution of the function for the first button
CtoFBtn.addEventListener("click", function () {
  var tempC = getTemp();
  if (tempC === "" || tempC === null) {
    showText('', outputCtoF);
    showText('', outputFtoC);
  } else if (isNaN(tempC)) {
    showText('Incorrect value', outputCtoF);
    showText('', outputFtoC);
  } else {
    var tempF = cToF(tempC);
    showTemp(tempF, outputCtoF);
    showText(stateOfWater(tempC), outputCtoF);
  }
});

//ececution of the function for the second button
FtoCBtn.addEventListener("click", function () {
  var tempF = getTemp();
  if (tempF === "" || tempF === null) {
    showText('', outputFtoC);
    showText('', outputCtoF);
  } else if (isNaN(tempF)) {
    showText('Incorrect value', outputFtoC);
    showText('', outputCtoF);
  } else {
    var tempC = fToC(tempF);
    showTemp(tempC, outputFtoC);
    showText(stateOfWater(tempC), outputFtoC);
  }
});