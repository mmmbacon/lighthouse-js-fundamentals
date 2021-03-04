function smartGarbage(trash, bins) {
  bins[trash]++;
  return bins;
}

console.log(smartGarbage('waste', { waste: 10, recycling: 20, compost: 21 }));