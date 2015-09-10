var Planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

// Basics: #7 Using vanilla JavaScript, update the HTML of the element with the id of vanilla_output 
// with the following text: "This content generated with vanilla JavaScript".
var vanillaOutput = document.getElementById("vanilla_output");
var text7 = "The content generated with vanilla JavaScript"
vanillaOutput.innerHTML = text7;

// Basics: #8 
var text8 = "This content generated with JQuery";
$("#jquery_output").html(text8);

// Functions and operators: #1
function modulus(x, y) {
  var out = x % y;
  return out;
}

// Functions and operators: #2
function doMath(x, y, operation) {
  var out = operation(x, y);
  return out;
}

function add (x, y) {
  var out = x + y;
  return out;
}

function subtract (x, y) {
  var out = x - y;
  return out;
}

var num1 = doMath(10, 3, add);
var num2 = doMath(10, 3, subtract);

// Arrays: #1
function sortedPlanets(inArray) {
  var out = inArray.concat().sort();
  return out;
}

var Planets_sorted = sortedPlanets(Planets);
console.log("Planets_sorted: ", Planets_sorted);

// Arrays: #2
function reversedPlanets(inArray) {
  var out = []
  for (var item in inArray) {
    var newItem = inArray[item].split('').reverse().join('');
    out.push(newItem);
  }
  return out;
}

var Planets_reversed = reversedPlanets(Planets);
console.log("Planets_reversed: ", Planets_reversed);

// Arrays: #3
function longPlanets(inArray) {
  var out = [];
  for (var item in inArray) {
    if (inArray[item].length >= 7){
      out.push(inArray[item]);
    }
  }
  return out;
}

var Planets_long = longPlanets(Planets);
console.log("Planets_long: ", Planets_long);

// XHR: #1
function getAnimals(filepath) {
  $.ajax({
    url: filepath,
    dataType: "json"
  }).done(function(data){
    console.log("animals", data.animals);
  })
};

getAnimals('../data/animals.JSON');