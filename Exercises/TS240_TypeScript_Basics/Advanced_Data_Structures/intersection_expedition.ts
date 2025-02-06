/*

Create two interfaces Dog with bark() and Cat with meow(). Make a new type Pet that is an intersection of Dog and Cat. Then instantiate a Pet object.

Expected output:

pet.bark();
// Output should be "Woof"
pet.meow();
// Output should be "Meow"

*/

interface Dog {
  bark(): string;
}

interface Cat {
  meow(): string;
}

type Pet = Dog & Cat;


const pet: Pet = {
  bark() {
      return "Woof";
  },
  meow() {
      return "Meow";
  },
};

console.log(pet.bark());
// Output should be "Woof"
console.log(pet.meow());
// Output should be "Meow"
