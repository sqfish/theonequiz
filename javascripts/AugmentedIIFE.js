///// IIFE: #3 /////
var FruitMaker = function(fruitmaker){
  fruitmaker.slices = function(fruit, sliceCount) {
    var out = [];
    while (out.length < sliceCount) {
      out.push(fruit);
    }
    return out;
  };
  return fruitmaker;
}(FruitMaker);

console.log("FruitMaker: ", FruitMaker);