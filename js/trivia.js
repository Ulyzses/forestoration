var curr = -1;
var triv = [
  "Leaves appear green because chlorophyll absorbs red and blue light energy, causing the green energy to bounce off the leaf’s surface.",
  "In one day, one large tree can lift up to 100 gallons of water out of the ground and discharge it into the air.",
  "Methuselah, an estimated 4,765-year-old ancient Bristlecone Pine, is one of the oldest living trees in the world.",
  "Tree shaded surfaces can be 20–45°F (11–25°C) cooler than surfaces in direct sun, helping homeowners reduce summer cooling costs.",
  "Dendrochronology is the dating and study of annual rings in trees.",
  "Trees reduce stormwater runoff by capturing and storing rainfall in the canopy and releasing water into the atmosphere through evapotranspiration.",
  "The rings in a cut tree don’t just reveal its age. They can also show signs of environmental changes, like a volcanic eruption or severe drought.",
  "No other organism on Earth lives as long as a tree.",
  "Trees help improve our water quality as they slow and filter rainfall.",
  "Wind-blown cottonwood seeds can stay airborne for days before they land. In fact, they can fly longer than any other kind of tree seeds.",
  "Some trees seem to “talk” to each other. Willows, for example, emit certain chemicals when they’re attacked by webworms. Other willows then appear to produce more tannin, making their leaves harder for the pests to digest.",
  "Have you ever knocked on wood for good luck? That superstition may have originated with primitive peoples who believed benevolent spirits lived in the trees.",
  "Moon trees were grown from seeds taken to the moon in early 1971. After orbiting the earth with the Apollo 14 mission, these tree seeds returned to earth and were germinated by the Forest Service. After being planted with their earth-bound counterparts, these seedlings showed no discernible difference after twenty years of growth.",
  "Pine cones have genders. Male pine cones shed pollen and female pine cones make seeds. When the wind blows pollen into the female cones, you guessed it, the seeds become pollinated.",
  "Trees can help you find your way if you get lost in the woods. In northern temperate climates, moss will grow on the northern side of the tree trunk, where there is more shade. Also, a tree’s rings can help point you in the right direction too. If you’re in the northern hemisphere, you can see the rings of the tree grow slightly thicker on the southern side since it receives more sunlight. In the southern hemisphere, the opposite is true, with rings being thicker on the northern side.",
  "Pine trees grow on six of seven continents, with Antarctica being the only one left out.",
  "Trees didn't exist for the first 90 percent of Earth's history. Earth is 4.5 billion years old, and plants may have colonized land as recently as 470 million years ago, most likely mosses and liverworts without deep roots. Vascular plants followed about 420 million years ago, but even for tens of millions of years after that, no plants grew more than about 3 feet (1 meter) off the ground.",
  "The first known tree was a leafless, fern-like plant from New York.",
  "A large oak tree can drop 10,000 acorns in one year."
]

function randomTrivia(){
  let rand = Math.floor(Math.random() * triv.length);

  if ( rand == curr ) {
    randomTrivia();
  } else {
    document.getElementById('paragraph').innerHTML = triv[rand];
    curr = rand;
  }
}