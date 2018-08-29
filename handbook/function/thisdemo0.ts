let deck0 = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        let that = this;
        return function () {
            let pickedCard0 = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard0 / 13);

            return {suit: that.suits[pickedSuit], card: pickedCard0 % 13};
        }
    }
}

let cardPicker0 = deck0.createCardPicker();
let pickedCard0 = cardPicker0();

console.log("card: " + pickedCard0.card + " of " + pickedCard0.suit);