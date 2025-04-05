// let number = prompt("Please enter a number");

// if (number >= 0) {
//   console.log(" Peach🍑");
// } else {
//   console.log("Bell paper🌶️");
// }

// const myFruite = "Pineapple";

// if (myFruite === "Cherry") {
//   console.log("I like cherry🍒");
// } else if (myFruite === "Pineapple") {
//   console.log("I like Pineapple🍍");
// } else {
//   console.log("I like bluebarry🫐");
// }

// let grade = 80;

// grade >= 50 ? console.log("pass") : console.log("fail");

// const personDatailsObj = {
//   firstName: "sahar",
//   lastName: "Nosrati",
//   year: 40,
//   eyeColor: "Brown",
//   fullName: function () {
//     return `${this.firstName} ${this.lastName} is ${this.year} years old with ${this.eyeColor} eye`;
//   },
// };

// console.log(personDatailsObj.fullName());

// personDatailsObj.explanation = function () {
//   return "This is function definition stored as a property value.";
// };

// console.log(personDatailsObj);
// console.log(personDatailsObj.explanation());

// console.log(personDatailsObj.eyeColor);
// console.log(personDatailsObj["firstName"]);
// console.log(Object.values(personDatailsObj));
// console.log(Object.entries(personDatailsObj));

// console.log(JSON.stringify(personDatailsObj));

// for (let i = 10; i >= -5; i--) {
//   console.log(i);
// }

// let sumOfNumber = 0;
// const number = 100;

// for (let i = 1; i <= number; i++) {
//   sumOfNumber += i;
// }

// console.log(sumOfNumber);

// const fruitArray = ["apple", "banana", "cherry"];

// for (let i = 0; i <= fruitArray.length; i++) {
//   for (let j = 0; j < fruitArray.length; j++) {
//     console.log(fruitArray[i]);
//   }
// }

// let factorialsOfIntegers = 1;

// const factorialFunction = function (number) {
//   if (number > 0) {
//     for (let i = 1; i <= number; i++) {
//       factorialsOfIntegers *= i;
//     }
//     return factorialsOfIntegers;
//   }
//   return `${number} is not acceptable`;
// };

// console.log(factorialFunction(12));

// function Person(name, lastName, age, city, phoneNumber) {
//   this.name = name;
//   this.lastName = lastName;
//   this.age = age;
//   this.city = city;
//   this.phoneNumber = phoneNumber;
//   this.fullName = function () {
//     const detailName = `${this.name} ${this.lastName} is ${this.age} years old and lives in ${this.city} city. You can cntact with him/her ${this.phoneNumber} phone number.`;
//     return detailName;
//   };
// }

// Person.prototype.nationality = "German";
// console.log(Person, Person.prototype);

// let solmaz = new Person("solmaz", "Nosrati", 41, "Tehran", 12345678);

// console.log(solmaz.fullName());

// solmaz.fullName = function () {
//   const fullNameInformation = `${this.name} ${this.lastName} is ${this.age}and she is in  ${this.city}and her phonenumber is ${this.phoneNumber}`;
//   return fullNameInformation;
// };

// solmaz.nationality = "Iranian";
// console.log(solmaz.nationality);

// const myLetters = "sdfgsergr\vsdytrdytdryd";
// const myTemplateLiteral = `I wrote ${myLetters} as an example`;
// console.log(myTemplateLiteral);

// const newStringByObj = new String("Sahar");
// console.log(newStringByObj, typeof newStringByObj);

// const factorialFunction = function (number) {
//   let factorialsOfIntegers = 1;
//   if (number > 0) {
//     for (let i = 1; i <= number; i++) {
//       factorialsOfIntegers *= i;
//     }
//     return factorialsOfIntegers;
//   }
//   return `${number} is not acceptable`;
// };

// console.log(factorialFunction(4));
// console.log(factorialFunction(5));
// console.log(factorialFunction(-5));

// //
// const mostFrequent = function (array) {
//   const myObj = {};
//   const findMaxKey_ValueOfObj = [0];
//   const findMinKeyOfObj = ["a"];

//   for (element of array) {
//     myObj[element] = (myObj[element] || 0) + 1;
//   }

//   for (element in myObj) {
//     if (myObj[element] == findMaxKey_ValueOfObj[0]) {
//       findMinKeyOfObj.unshift(element);
//       findMaxKey_ValueOfObj[0] = myObj[element];
//     }
//     if (myObj[element] > findMaxKey_ValueOfObj[0]) {
//       findMinKeyOfObj.shift();
//       findMinKeyOfObj[0] = element;
//       findMaxKey_ValueOfObj[0] = myObj[element];
//     }
//   }
//   return findMinKeyOfObj;
// };

// console.log(mostFrequent([4, 4, 4]));

//

// const arrayOfString = [];
// const convertedStrToNumber = [];
// let sumOfNumbers = 0;
// let positiveNumber = 0;

// const convertedNumberToSterFunc = function (number) {
//   let convertedNumberToSter = String(number);
//   for (element of convertedNumberToSter) {
//     arrayOfString.push(element);
//   }
//   return convertedStrToNumberFunc(arrayOfString);
// };

// const convertedStrToNumberFunc = function (arrayOfString) {
//   for (element of arrayOfString) {
//     convertedStrToNumber.push(parseInt(element));
//   }
//   return calculateOfSumOfNumbers(convertedStrToNumber);
// };

// const calculateOfSumOfNumbers = function (convertedStrToNumber) {
//   for (element of convertedStrToNumber) {
//     sumOfNumbers += element;
//   }
//   return sumOfNumbers;
// };

// const calculateTheSumOfDigit = function (number) {
//   if (number < 0) {
//     positiveNumber = Math.abs(number);
//     convertedNumberToSterFunc(positiveNumber);
//   } else {
//     convertedNumberToSterFunc(number);
//   }
//   return sumOfNumbers;
// };

// console.log(calculateTheSumOfDigit(25));

//

// const myObj = {
//   name: "John",
//   age: 30,
//   cars: [
//     { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
//     { name: "BMW", models: ["320", "X3", "X5"] },
//     { name: "Fiat", models: ["500", "Panda"] },
//   ],
// };

// for (element of myObj.cars) {
//   const model = element.models[1];
//   console.log(model);
// }

// const isPalindrome = function (myStr) {
//   const punctuation = /[\.,?!'":]/g;

//   const convertToLowercase = myStr.replaceAll(punctuation, "").toLowerCase();
//   const arrOfStr = convertToLowercase.split(" ").join("").toString();

//   const reversedArrOfStr = arrOfStr.split("").reverse().join("");

//   return reversedArrOfStr == arrOfStr ? true : false;
// };

// console.log(isPalindrome("A man, a plan, a canal: Panama"));

//

// const fizzBuzz = function (number) {
//   if (number > 0) {
//     if (number % 3 == 0 && number % 5 == 0) {
//       return "FizzBuzz";
//     } else if (number % 3 == 0) {
//       return "Fizz";
//     } else if (number % 5 == 0) {
//       return "Buzz";
//     } else {
//       return "Your number is even.";
//     }
//   } else {
//     return "Your number is not valid. Please select other number";
//   }
// };

// console.log(fizzBuzz(-12));

//

// const isPrime = function (number) {
//   const primeNumber = [];

//   if (number >= 1) {
//     for (let i = 2; i < number; i++) {
//       if (i % 2 != 0 && i % i == 0) {
//         if (i > 3 && i % 3 == 0) {
//           continue;
//         }
//         if (i > 5 && i % 5 == 0) {
//           continue;
//         }
//         primeNumber.push(i);
//       }
//     }
//     return primeNumber;
//   }
//   return "Your number is not valid";
// };

// console.log(isPrime(100));

////
// const countWords = function (myString) {
//   const contNumberOfElements = {};

//   const punctuation = /[\.,?!'":;]/g;
//   const newString = myString.replace(punctuation, "").toLowerCase();

//   const convertedStringToArray = newString.split(" ");

//   for (element of convertedStringToArray) {
//     contNumberOfElements[element] = (contNumberOfElements[element] || 0) + 1;
//   }
//   return contNumberOfElements;
// };

// const myString = "Hello, Sahar. I like you sahar. i know you";
// const countword1 = countWords(myString);
// console.log(countword1);

// const countword2 = countWords(myString);
// console.log(countword2);

////

// const firstNonRepeatingChar = function (myString) {
//   if (myString == "") {
//     return null;
//   } else {
//     const punctuation = /[\.,?!'":;]/g;
//     const newString = myString.replace(punctuation, "").toLowerCase();

//     const convertedStrToArr = newString.split("");
//     const countEachElement = {};

//     for (element of convertedStrToArr) {
//       countEachElement[element] = (countEachElement[element] || 0) + 1;
//     }

//     const arrFromObjOfCoutElement = Object.entries(countEachElement);

//     for (element of arrFromObjOfCoutElement) {
//       if (element[1] == 1) {
//         return element[0];
//         break;
//       }
//     }
//   }
// };



// 




