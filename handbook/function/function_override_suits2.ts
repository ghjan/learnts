let suits2 = ["hearts", "spades", "clubs", "diamonds"];

function pickCard2(x: { suit: string; card: number; }[]): number;
function pickCard2(x: number): { suit: string; card: number; };
function pickCard2(x): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return {suit: suits2[pickedSuit], card: x % 13};
    }
}

let myDeck2 = [{suit: "diamonds", card: 2}, {suit: "spades", card: 10}, {suit: "hearts", card: 4}];
let pickedCard3 = myDeck2[pickCard2(myDeck2)];
console.log("card: " + pickedCard3.card + " of " + pickedCard3.suit);

let pickedCard4 = pickCard2(15);
console.log("card: " + pickedCard4.card + " of " + pickedCard4.suit);