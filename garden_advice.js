// Ask the user for the current season and plant type
let season = prompt("Please enter the current season (summer, winter, etc.):");
let plantType = prompt("Please enter the type of plant (flower, vegetables, etc.):");

// Maps each known season to its corresponding gardening advice.
// A season not listed here will fall back to a default message.
const seasonAdvice = {
  summer: "Water your plants regularly and provide some shade.\n",
  winter: "Protect your plants from frost with covers.\n",
};

// Maps each known plant type to its corresponding care advice.
// A plant type not listed here will fall back to a default message.
const plantTypeAdvice = {
  flower: "Use fertiliser to encourage blooms.",
  vegetable: "Keep an eye out for pests!",
};

// Returns the advice string for a given season, or a default
// message if the season isn't one we have advice for.
function getSeasonAdvice(season) {
  const advice = seasonAdvice[season] || "No advice for this season.\n";
  return advice;
}

// Returns the advice string for a given plant type, or a default
// message if the plant type isn't one we have advice for.
function getPlantTypeAdvice(plantType) {
  const advice = plantTypeAdvice[plantType] || "No advice for this type of plant.";
  return advice;
}

// Combines the season advice and plant type advice into one
// message, then logs it to the console.
function getGardeningAdvice(season, plantType) {
  const advice = getSeasonAdvice(season) + getPlantTypeAdvice(plantType);
  console.log(advice);
}

// Generate and display the advice for what the user entered above.
getGardeningAdvice(season, plantType);