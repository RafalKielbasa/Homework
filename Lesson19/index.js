const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//1.
function sum(acc, element) {
  acc += element;
  return acc;
}
const amount = array.reduce(sum, 0);
console.log("1st task:", amount);

//2.
function evenSum(acc, element) {
  if (element % 2 == 0) {
    acc += element;
  }
  return acc;
}

const evenEmount = array.reduce(evenSum, 0);
console.log("2nd task:", evenEmount);

//3.

const tenMore = array.reduce(sum, 10);
console.log("3rd task:", tenMore);

//4.

// Jeśli nie podamy initialValue akumulator bedzie pierszym alementem tablic. Gdy go podamy mamy wpływ na to czym będzie(number, tablica, obiekt).

//5.

// Jeżeli podamy initialValue to pierszy element tablicy będzie miał index 0.

//6.

function myReduce(reduceFunction, startValue) {
  let i = 0;
  if (startValue === undefined) {
    i = 1;
    startValue = this[0];
  }
  let acc = startValue;
  for (i = 0; i < this.length; i++) {
    const element = this[i];

    acc = reduceFunction(acc, element);
  }
  return acc;
}

Array.prototype.myReduce = myReduce;
console.log("6th task:", array.myReduce(sum, 0));

const someArray = [11, 3, 5, 31, 31, 54, 23, 14];

//7.

const moreThan50 = someArray.some(function (element) {
  return element > 50;
});
console.log("7th task", moreThan50);

//8.

const moreThan2 = someArray.every(function (element) {
  return element > 2;
});
console.log("8th task:", moreThan2);

//9.

//Every zwróci true jeśli wszystkie elementy spełniają zadany warunek, natomiast some zwróci true już gdy jeden element tablicy spełnia warunek.

//10.

const divisible = someArray.some(function (element) {
  return element % 7 == 0;
});
if (divisible == true) {
  console.log("10th task: W tabliczy znajduje się element podzielny przez 7");
}

//11.

function mySome(functionSome) {
  const outcome = [];
  for (let i = 0; i < this.length; i++) {
    if (functionSome(this[i]) === true) {
      outcome[i] = true;
    } else {
      outcome[i] = false;
    }
  }
  if (outcome.includes(true)) {
    return true;
  } else {
    return false;
  }
}
Array.prototype.mySome = mySome;

function moreThan(element) {
  return element < 10;
}
console.log("11th task:", someArray.mySome(moreThan));

//12.

function myEvery(functionSome) {
  const outcome = [];
  for (let i = 0; i < this.length; i++) {
    if (functionSome(this[i]) === true) {
      outcome[i] = true;
    } else {
      outcome[i] = false;
    }
  }
  if (outcome.includes(false)) {
    return false;
  } else {
    return true;
  }
}

Array.prototype.myEvery = myEvery;
console.log("12th task:", someArray.myEvery(moreThan));

//13

const weirdArray = [2, "Kot", 18, "Mercedes", true, 12, 68, "Kaczka"];

function sum2(arr) {
  const outcome = arr
    .filter(function numbersOnly(element) {
      if (typeof element === "number") {
        return true;
      }
    })
    .reduce(sum);
  return outcome;
}

console.log("13th task:", sum2(weirdArray));

//14.

function subtraction(arr, initialValue) {
  if (initialValue === undefined) {
    initialValue = 0;
  }
  const outcome = arr.reduce(function (acc, element) {
    acc -= element;
    return acc;
  }, initialValue);
  return outcome;
}
console.log("14th task:", subtraction(array));

//15.

function seeker(arr, value) {
  const outcome = arr.some(function (element) {
    return element === value;
  });
  return outcome;
}
console.log("15th task:", seeker(weirdArray, "Mercedes"));

//16.

function Car(model, yearOfProduction, color) {
  this.model = model;
  this.yearOfProduction = yearOfProduction;
  this.color = color;
  this.drive = () => console.log("Ale idzie!!!");
}

const CLS = new Car("CLS", 2015, "white");
console.log(CLS);

const F11 = new Car("F11", 2016, "black");
console.log(F11);

//17.

// Słowo kluczowe new tworzy obiekt podczas użycia kostruktora, możemy go użyć do tworzenia nowych typów danych.

//18.

Car.prototype.tankFuel = function () {
  console.log("Zatankuj paliwo");
};
Car.prototype.stop = function () {
  console.log("Zatrzymaj się!!!");
};
CLS.tankFuel();
CLS.stop();
CLS.drive();
