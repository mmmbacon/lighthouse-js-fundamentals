const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

function judgeVegetable(vegetables, metric) {

  let max = 0;
  let winner = "Sorry, nobody wins";

  vegetables.forEach(function (item) {
    if (item[metric] > max) {
      max = item[metric];
      winner = item.submitter;
    }
  });

  return winner;
}

console.log(judgeVegetable(vegetables, metric));