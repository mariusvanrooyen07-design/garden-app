// Prompts the user to enter values for the season and plant type
let season = prompt("Please enter the current season (summer, winter, etc.):");
let plantType = prompt("Please enter the type of plant (flower, vegetables, etc.):");

getGardeningAdvice(season, plantType);

// Function 
function getSeasonAdvice(season) {
  // Local variable for advice
  let advice = "";
  // Determine advice based on the season
  if (season === "summer") {
    advice += "Water your plants regularly and provide some shade.\n";
  } else if (season === "winter") {
    advice += "Protect your plants from frost with covers.\n";
  } else {
    advice += "No advice for this season.\n";
  }
  return advice;
}

function getPlantTypeAdvice(plantType) {
  // Local variable for advice
  let advice = "";
  // Determine advice based on the plant type
  if (plantType === "flower") {
    advice += "Use fertiliser to encourage blooms.";
  } else if (plantType === "vegetable") {
    advice += "Keep an eye out for pests!";
  } else {
    advice += "No advice for this type of plant.";
  }
  return advice;
}

function getGardeningAdvice(season, plantType) {
  const advice = getSeasonAdvice(season) + getPlantTypeAdvice(plantType);
  console.log(advice);
}


// - Store advice in an object for multiple plants and seasons.
// - Suggest plants that thrive in the given season.
