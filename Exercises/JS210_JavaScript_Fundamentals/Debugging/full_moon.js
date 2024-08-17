/*

  Run the following code. Why is every warning displayed twice? Change the code so that each warning is displayed only once, as intended.

  const species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
  const isMidnight = true;
  const isFullmoon = true;

  function isTransformable(species) {
    return species[0] === 'w';
  }

  function transform(species) {
    return `were${species}`;
  }

  for (let index = 0; index < species.length; index++) {
    const thisSpecies = species[index];
    var newSpecies;

    if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
      newSpecies = transform(thisSpecies);
    }

    if (newSpecies) {
      console.log(`Beware of the ${newSpecies}!`);
    }
  }

  Solution:

  The newSpecies is being declared within the for block. Because of how var works, this variable is a global variable. If, instead, the declaration was inside a function, then it would not be a global variable, but would be contained within the function. However, in this case, it is being made a global variable and, as such, it is not going to work well with the intention of the if clause. The condition will always evaluate to true because the variable's value is Not going to be dropped at each iteration as it seems to be the intention of the designer. To fix it, we can switch from var to let declaration.

*/

const species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
const isMidnight = true;
const isFullmoon = true;
                                                                             
function isTransformable(species) {
  return species[0] === 'w';
}
                                                                             
function transform(species) {
  return `were${species}`;
}
                                                                             
for (let index = 0; index < species.length; index++) {
  const thisSpecies = species[index];
  let newSpecies;
                                                                             
  if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
    newSpecies = transform(thisSpecies);
  }
                                                                             
  if (newSpecies) {
    console.log(`Beware of the ${newSpecies}!`);
  }
}
