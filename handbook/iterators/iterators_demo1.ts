let pets = new Map<string, string>();
pets["species"] = "mammals";

for (let pet in pets) {
    console.log(pet); // "species"
}
// ok only after es6
for (let p of pets) {
    console.log(p); // "Cat", "Dog", "Hamster"
}
