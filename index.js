var animal = 'dog';

function myAnimal() {
  return animal;
}
myAnimal();


function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animal = "cat";
  return animal;
}
yourAnimal();


function add2(n) {
  

  // Feel free to move things around!
  const two = 2;
  
  return n + two;
}
 add2(n);




var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.


<<<<<<< HEAD
var theFunk = funkyFunction()()
=======
theFunk=funkyFunction()()
>>>>>>> 599e9ffbfdd8b31d7d12d8db6a7e004a34409e53
