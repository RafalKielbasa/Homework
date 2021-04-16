// task 1
let name="Karol";
 let age= 40;
 let isOpen = true;
 const stringBolean = "true";
 const stringNumber = "100";
//  task 2
 console.log("Michał");
 console.log("Hello Ania");
 console.log(4);
 console.log(false);
 // task 3
 console.log(name);
 console.log(age);
 console.log(isOpen);
 console.log(stringBolean);
 console.log(stringNumber);
 // task 4
 console.log(2+2);
 console.log("Michał "+"Kowalski");
 console.log(2+2*2);
 // task 5,6
 let number= 2+2;
 console.log("wynik", number);
 number=number+2;
 number=number*2;
 console.log("Last value", number); 
// task 7
function add(){
    return 2*2
    }
    
function string(){
     return "Hello World"
    }
function bolean(){
     return true
}
function remainder(a=6,b=4){
    return a%b
}
function power(a=3,b=4){
    return a**b
}
function concatenation(a="Hello, ",b="how are you?"){
    return a+b
}
function multiplying(a=5,b=60){
    return a*b    
}
function multiplyingTwo(a=3,b=3600){
    return a*b    
}
function operation(a=10,b=9,c=2){
    return a*b/c
} 
function subtraction(a=200,b=10){
    return a-b

}
// task 8
const digits= [1,2,3];
const cars=["Porshe", "BMW","Audi", "Mercedes","Pagani"]
const boli=[true,false,true]
const empty=[]
const various=[3,"lub",true,5,false]
console.log(various[1]);
// task 8.g
const own= [8,"g","***"]
console.log("length", own["length"])
// task 8.h
let hard = []
for(i=0;i<5;i++){
    hard[i]=Math.random();
}
console.log(hard)
// task 8.h alternative
hard=[]
hard.push("Al")
hard.push("ter")
hard.push("na")
hard.push("tiv")
console.log(hard)
// task 9
let emptyObjeckt={

}
let person={
    name: "Iza"
}
let personDetails = {
    name: "Rafał", 
    lastName: "Kiełbasa",
    age: 28,
    drivingLicence: true
}
console.log("age", personDetails.age)
console.log("Person details ", personDetails)
// task 10

function addition(a=0,b=0){
    console.log(a,b)
    return a+b
}
function stringMaker(text){
    return text
}
function boleanMaker(boli){
    return boli
}
function argumentRemainder(a=0,b=0){
    alt = rema = a%b
    return rema
}
function argumentPower(a=0,b=0){
    alt=pow=a**b
    return pow
}
function argConcatenation(string1,string2){
    return string1+string2
}
function argMinForSec(minutes){
    return minutes*60
} 
function argHourForSec(hour){
    return hour*60*60
} 
function triangleArea(a=0,h=0){
    return (a*h)/2
}
function yearsForDays(year){
    return year*365
}
function argumentPowerTwo(a){
    return a**a
}
function triangleSide(side1=0,side2=0){
    return (side1+side2)-1
}
function argHello(name){
    return "Hello "+name
}
function argAge(year){
    return 2021-year
}
function argPoints(twoPt,threePt){
    let=ppg= (2*twoPt)+(3*threePt)
    return ppg
}
