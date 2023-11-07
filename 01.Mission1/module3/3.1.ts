{
  // block starts
  class Animal {
    /*   name: string;
    species: string;
    sound: string; */

    // parameter properties: placing public inside constructor
    constructor(public name: string, public species: string, public sound: string) {
      /*  this.name = name;
      this.species = species;
      this.sound = sound; */
    }

    // Method
    makeSound() {
      console.log(`This ${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("German Shepard", "dog", "bark");
  const cat = new Animal("Puchi", "cat", "Meow");

  cat.makeSound();

  // block ends
}
