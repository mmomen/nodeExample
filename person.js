module.exports = function(name) {
  var sayHi = function() {
    console.log(name);
  };

  return {
    "name": name,
    "sayHi": sayHi
  };
};