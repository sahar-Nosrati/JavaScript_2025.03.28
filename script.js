// //async-await function
// const tehranWeather = async function () {
//   const response = await fetch(
//     "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Warsaw?unitGroup=metric&key=DGYP6VXYJ58S5QCRN64JVFEVA&contentType=json"
//   );
//   try {
//     const dataOfWeather = await response.json();
//     console.log(dataOfWeather);
//   } catch (err) {
//     console.log(err.message);
//   }
// };

// tehranWeather();

//############################################

// push unshift pop shift

// const allFruits = ["Apple", "Banana", "Cherry"];
// const evaluationExistingFruits = function (fruits) {
//   const favoritFruit = "Pineapple";
//   for(let fruit of fruits){
//       const confirmationExistingFruit = `The my favorite ${favoritFruit} is existing in ${fruits}`;
//       const rejectedExistingFruit = `The my favorite ${favoritFruit} is not existing in ${fruits}`;

//       const myFavoritFruit = favoritFruit == fruit ? confirmationExistingFruit : rejectedExistingFruit;
//       return (myFavoritFruit);
//     }
//   };

//   console.log(allFruits);
//   allFruits.push("Pineapple");
//   console.log(allFruits);
//   console.log(evaluationExistingFruits(allFruits));

//   allFruits.unshift("Pineapple");
//   console.log(allFruits);
//   console.log(evaluationExistingFruits(allFruits));

//   allFruits.pop();
//   console.log(allFruits.pop());
//   console.log(allFruits);
//   console.log(evaluationExistingFruits(allFruits));

//   allFruits.shift();
//   console.log(evaluationExistingFruits(allFruits));

///########################




