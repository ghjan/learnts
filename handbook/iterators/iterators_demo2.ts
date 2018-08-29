let pets = new Set(["Cat", "Dog", "Hamster"]);

for (let pet in pets) {
    console.log(pet); //
}
// ok only after es6
for (let pet of pets) {
    console.log(pet); // "Cat", "Dog", "Hamster"
}