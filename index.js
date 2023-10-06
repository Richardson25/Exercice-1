/*
Exercise 1
Create a counter function the counter function must return another function.
This returned function should act as a counter, returning
a numeric value that starts at 1 and increments with each invocation. 
*/


function counter() {
  let count = 1;

  return function () {
    count += 1;

    console.log(`${count}`);
  };
}

let counterFunction = counter();

counterFunction();
counterFunction();
counterFunction();
counterFunction();
counterFunction();
counterFunction();
counterFunction();
counterFunction();
counterFunction();
counterFunction();
