const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']

function finalPosition(moves) {

  let coordinates = [0, 0];

  for (var move of moves) {
    switch (move) {
    case "north":
      coordinates[1]++;
      break;
    case "east":
      coordinates[0]++;
      break;
    case "south":
      coordinates[1]--;
      break;
    case "west":
      coordinates[0]--;
      break;
    }
  }

  return coordinates;
}

finalPosition(moves);
