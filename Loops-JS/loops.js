//1.
//a)
console.log("A");
for (let i = 1; i <= 9; i++) {
  console.log(i);
}

//b)
console.log("B");
for (i = 9; i >= 1; i--) {
  console.log(i);
}

//c)
console.log("C");
for (i = 5; i <= 15; i++) {
  console.log(i);
}

//d)
console.log("D");
for (i = 0; i >= -10; i--) {
  console.log(i);
}

//e)
console.log("E");
for (i = 1; i <= 20; i += 2) {
  console.log(i);
}

//f)
console.log("F");
for (i = 10; i >= -10; i -= 4) {
  console.log(i);
}

//ga) Nie jestem pewien czy dobrze rozumiem treść zadania, w związku czym wstawiam dwa alternatywne rozwiązania.
console.log("Ga");
for (i = 0; i <= 100; i *= 2) {
  if (i == 0) {
    console.log(0);
    i += 1;
  }
  console.log(i);
}
//gb)
console.log("Gb");
for (i = 0; i <= 100; i++) {
  i *= 2;
  if (i > 100) {
    console.log(100);
  } else {
    console.log(i);
  }
}

//2.
//a)
console.log("2A");
for (i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
//b)
console.log("2B");
for (i = 0; i <= 20; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

//c)
console.log("2C");
for (i = 0; i <= 10; i++) {
  i % 2 == 0
    ? console.log(i, "Liczba parzysta")
    : console.log(i, "Liczba nieparzysta");
}

//d)
console.log("2D");
for (i = 1; i <= 30; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//e)

console.log("2E");
for (i = 100; i >= 0; i -= 5) {
  i % 10 == 0 ? console.log(i, "Podzielna przez 10") : console.log(i);
}

//3.
//a)
console.log("3A");
function loop(x = 5) {
  for (i = 0; i <= x; i++) {
    console.log(i);
  }
}
loop();

//b)
console.log("3B");
function loop2(x = 10) {
  for (i = x; i <= 15; i++) {
    console.log(i);
  }
}
loop2();

//c)
console.log("3C");
function loop3(x = 3) {
  for (i = 0; i <= 15; i += x) {
    console.log(i);
  }
}
loop3();

//d)
console.log("3D");
function loop4(start = 5, end = 12) {
  for (i = start; i <= end; i++) {
    console.log(i);
  }
}
loop4();

//e)
console.log("3E");
function loop5(start, stop, iter) {
  for (i = start; i <= stop; i += iter) {
    console.log(i);
  }
}
loop5(5, 15, 3);

//4.
//a)

console.log("4A");
const numbers = [1, 2, 3, 4, 5];
function numberLoop(x) {
  for (i = 0; i < x.length; i++) {
    console.log(x[i]);
  }
}
numberLoop(numbers);

//b)
console.log("4B");
const names = ["Kris", "Tom", "Henry", "Lisa"];
function namesLoop(x) {
  for (i = 0; i < x.length; i++) {
    console.log(`Cześć ${x[i]}`);
  }
}
namesLoop(names);

//c)
console.log("4C");
const cars = [
  { model: "Ford", color: "Red" },
  { model: "VW", color: "Black" },
  { model: "Porsche", color: "Yellow" },
  { model: "Aston-Martin", color: "Green" },
];

function carDealer(car) {
  for (i = 0; i < car.length; i++) {
    console.log(`Przed wami stoi ${car[i].color} ${car[i].model}`);
  }
}

carDealer(cars);

//d)
console.log("4D");
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function evenNumber(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      console.log(arr[i]);
    }
  }
}

evenNumber(arr);

//e)
console.log("4E");
const arr2 = ["Mariusz", 198, "Krzak", 275, true];

function onlyString(arr) {
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "string") {
      console.log(arr[i]);
    }
  }
}

onlyString(arr2);

//f)
console.log("4F");
let emptyArr = [];

function newArray(arr) {
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
      emptyArr.push(arr[i]);
    }
  }
}

newArray(arr2);

console.log(emptyArr);

//5.
//a)
console.log("5A");
function sum(arr) {
  let total = 0;
  for (i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

const total2 = sum(arr);
console.log(total2);

//b)
console.log("5B");
let even2 = [];
let odd = [];
function newArrays(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      even2.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
}

newArrays(arr);

console.log(even2, odd);

//c)
console.log("5C");
const string = "Marysieńka";
function includesY(string) {
  if (string.includes("y") || string.includes("Y")) {
    return "Jest!";
  } else {
    return "Nie ma!";
  }
}
const y = includesY(string);
console.log(y);

//d)
console.log("5D");

function countResult(x = 5) {
  let counter = x;
  for (i = x - 1; i >= 1; i--) {
    counter *= i;
  }
  return counter;
}
const result = countResult();
console.log(result);

//e)

console.log("5E");

const numberArray = [1, 2, 3, 7, 9, 11];
const stringArray = ["idzie", "Grześ", "przez", "wieś"];
const string2 = "string";
const number2 = "number";

function concatenation(array, choise) {
  let output = 0;
  if (array == []) {
    output = "Tablica jest pusta";
  } else if (choise === "string" || choise === "number") {
    if (typeof array[0] == "string") {
      output = "";
    }
    for (i = 0; i < array.length; i++) {
      output += array[i];
    }
  } else {
    output = "Drugi parametr jest nieprawidłowy";
  }
  return output;
}

const concatOutput = concatenation(numberArray, string2);
console.log(concatOutput);

//f)
console.log("5F");

const people = [
  { name: "Rafał", lastName: "Koparka", hasCar: true, hasDrivingLicence: true },
  {
    name: "Piotrek",
    lastName: "Patyk",
    hasCar: true,
    hasDrivingLicence: false,
  },
  { name: "Anna", lastName: "Pierog", hasCar: false, hasDrivingLicence: true },
  {
    name: "Magda",
    lastName: "Popiel",
    hasCar: false,
    hasDrivingLicence: false,
  },
];

function afterParty(array) {
  for (i = 0; i < array.length; i++) {
    if (array[i].hasCar == true && array[i].hasDrivingLicence == true) {
      console.log(
        `Wyśmienicie ${array[i].name} ${array[i].lastName}, mógłbyś zabrać mnie do domu?`
      );
    } else if (array[i].hasCar == true && array[i].hasDrivingLicence == false) {
      console.log(
        `${array[i].name} ${array[i].lastName} juz raz straciłeś prawo jazdy, odpuść sobie`
      );
    } else {
      console.log(
        `${array[i].name} ${array[i].lastName} musimy poszukać podwózki`
      );
    }
  }
}
afterParty(people);

//g
console.log("5G");

function pushToAttay(array, x) {
  let exist = false;
  for (i = 0; i < array.length; i++) {
    if (array[i] == x) {
      exist = true;
    }
  }
  if (exist == false) {
    array.push(x);
    return array;
  } else {
    return "Taka wartość już istnieje w tablicy";
  }
}

const lastLoop = pushToAttay(stringArray, "piasek");
console.log(lastLoop);
