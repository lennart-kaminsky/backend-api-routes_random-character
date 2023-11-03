import Chance from "chance";
const chance = new Chance();

export default function handler(request, response) {
  response.status(200).json(createRandomCharacter());
}

function createRandomCharacter() {
  return {
    firstName: chance.first(),
    lastName: chance.last(),
    twitter: chance.twitter(),
    geohash: chance.geohash(),
  };
}
