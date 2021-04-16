//task nr.1
//a)
function add(a = 3, b = 6, c = 8) {
  return a + b + c;
}
console.log(add());
//b)
function triangle(a = 5, h = 7) {
  const pole = (a * h) / 2;
  return `Pole trójkąta to ${pole}, czyli ma on ${a} długości podstawy i ${h} wysokości`;
}
const triangleArea = triangle();
console.log(triangleArea);
//c)
function drivingLicense(age1 = 25, age2 = 18) {
  return `Ta osoba ma prawo jazdy od ${age1 - age2} lat`;
}
const drivingAge = drivingLicense();
console.log(drivingAge);
//d)
function wayCost(milage = 10, way = 1450) {
  return (way / 100) * milage;
}
const litersOfFuel = wayCost();
console.log("Ilość paliwa", litersOfFuel);

//e)
function concatenation(name = "Ala", age = 23, children = 2) {
  return `${name} ma ${age} lata i ${children} dzieci`;
}
const ala = concatenation();
console.log(ala);

//task nr.2
//a)
function arrayF(a = [1, 2, 3, 4]) {
  return a;
}
const arrayFunction = arrayF();
console.log(arrayFunction);

//b)
function arrayF2(a) {
  const second = a[1];
  return second;
}
const array2 = [1, 4, 6];
const arrayFunction2 = arrayF2(array2);
console.log(arrayFunction2);

//c)
function arrayF3(a) {
  const length = a.length;
  const third = a[2];
  return `Przekazana tablica ma ${length} elamentów, a elementem nr 3 jest ${third} `;
}
const arrayFunction3 = arrayF3(array2);
console.log(arrayFunction3);

//d)
const emptyArray = [];
function addToArray(array = []) {
  array.push("element nr", 1, true);
  return array;
}
console.log(addToArray());
//e)

let person = {
  name: "Kuba",
  lastName: "Kurak",
  age: 21,
  height: 188,
};

function personFinder(person) {
  const name = person.name;
  return name;
}

const personName = personFinder(person);
console.log(personName);

//f)

function personData(person) {
  const { name, lastName, age, height } = person;
  return `${name} ${lastName} ma ${age} lat i ${height} wzrostu`;
}

const personData1 = personData(person);
console.log(personData1);

//g)
function ageChanger(person, age2 = 25) {
  person.age = age2;
  return person;
}

let person2 = ageChanger(person);
console.log(person2);

// task.nr 3
//a)
function drivingLicenseCheck(age = 17, drivingLicense = true) {
  if (age < 18) return "Nie masz prawa jazdy";
  else if (age > 18 && drivingLicense == false) return "Nie masz prawa jazdy";
  else return "Możesz śmiało jeździć";
}
const trip = drivingLicenseCheck();
console.log(trip);

//b)
function market(option) {
  if (option == "Kup" || option == "kup") return "Widzę że zrobić zakupy";
  else if (option == "Sprzedaj" || option == "sprzedaj")
    return "Możesz tutaj swobodnie sprzedawać";
  else return "Nie wybrałeś żadnej z dostępnych opcji - wpisz kup lub sprzedaj";
}
const marketChoise = market("sprzedaj");
console.log(marketChoise);

//c)
function numberToString(number) {
  if (number < 0) return "Liczba jest ujemna";
  else if (number == 0) return "Liczba jest równa 0";
  else return "Liczba jest dodatnia";
}
const nrString = numberToString(0);
console.log(nrString);

//d)
function divisible(number) {
  if (number % 3 == 0 && number % 5 == 0) return "FizzBuzz";
  else if (number % 3 == 0) return "Fizz";
  else if (number % 5 == 0) return "Buzz";
}
const FizzBuzz = divisible(15);
console.log(FizzBuzz);

//e)
function filmApproval(age, approval) {
  if (age > 15) return "Zapraszamy na seans!";
  else if (age < 15 && approval == true) return "Zapraszamy na seans!";
  else return "Przykro mi, załatw sobie zgodę rodziców mały:)";
}
const film15 = filmApproval(14, false);
console.log(film15);

//f)
function boolean(arg) {
  if (arg == true) return "Tak";
  else if (arg == false) return "Nie";
  else return "To nie jest boolean";
}
const booli = boolean();
console.log(booli);

//g)
function evenOrNot(number) {
  if (number % 2 == 0 || number == 0) return "Ta liczba jest parzysta";
  else return "Ta liczba nie jest parzysta";
}
const evenON = evenOrNot(-12);
console.log(evenON);

//task nr.4

//a)

const car = {
  model: "CLS",
  brand: "Mercedes",
  yearOP: 2011,
  isCabrio: false,
};

function carInformation({ model, brand, yearOP, isCabrio }) {
  let cabrio;
  isCabrio == true
    ? (cabrio = "To jest cabrio")
    : (cabrio = "To nie jest cabrio");
  if (yearOP > 2021) return "Auta jeszcze nie wyprodukowano";
  else
    return `Marka: ${brand}, Model ${model}, wyprodukowany w ${yearOP} roku, ${cabrio} `;
}
const carInfo = carInformation(car);
console.log(carInfo);

//b)

function array3(ar) {
  const length1 = ar.length;
  if (length1 == 0) return "To jest pusta tablica";
  else if (length1 != 0 && length1 < 5) return `Tablica ma ${length1} elementy`;
  else return `Tablica ma ${length1} elementów`;
}
const tab1 = [];
const tabLength = array3(tab1);
console.log(tabLength);

//c)

const person3 = {
  firstName: "Michał",
  surname: "Byczek",
  books: false,
  tv: true,
};
const book = {
  title: "Tools of Titans",
  type: "handbook",
  pages: 800,
};

function bookLover({ firstName, books, tv }, { title, type, pages }) {
  if (books == true)
    return `Cześć ${firstName}, polecam Ci przeczytać książke ${title}, ma tylko ${pages} stron`;
  else if (books == false && tv == true) return "Idź oglądać telawizję";
  else return "Nie wiem co Ci zaproponować";
}
const whatToDo = bookLover(person3, book);
console.log(whatToDo);
