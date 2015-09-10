///// IIFE: #1, #2 /////
var FruitMaker = (function(){
  var fruits = ["apples", "bananas", "cherries", "huckleberries"];
  return {
    getFruits: function(){
      return fruits;
    },
    addFruit: function(input){
      fruits.push(input);
    }
  };
})();