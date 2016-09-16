const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Laserbeak', alliance: null },
  { name: 'Barricade', alliance: null },
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null },
  { name: 'Megatron', alliance: null },
  { name: 'Ironhide', alliance: null },
  { name: 'Ratchet', alliance: null }
];

const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null },
];

const sortedRobots = robots.map(function(transformer) {
  const updatedTransformer = Object.assign({}, transformer)

  // if (knownDecepticons.includes(transformer.name)) {
  //   updatedTransformer.alliance = 'decepticon'
  //
  // } else {
  //   updatedTransformer.alliance = 'autobot'
  // }

  knownDecepticons.includes(transformer.name) ? updatedTransformer.alliance = 'decepticon' : updatedTransformer.alliance = 'autobot'

  return updatedTransformer;
})

const coloredZebraStripes = zebraStripes.map(function(stripe, index) {
  const updatedStripe = Object.assign({}, stripe)

  // if (index % 2 === 0 ) {
  //   updatedStripe.color = 'black'
  // } else {
  //   updatedStripe.color = 'white'
  // }

  index % 2 === 0 ? updatedStripe.color = 'black' : updatedStripe.color = 'white'

  return updatedStripe;
})
