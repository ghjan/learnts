function getStock() {
    return {
        code: "IBM",
        price: {
            price1: 200,
            price2: 400
        },
        aaa: "xixi",
        bbb: "haha"
    }
}

// var stock = getStock();
// var code = stock.code;
// var price = stock.price;
var {code: codex, price: {price2}} = getStock();
console.log(codex);
console.log(price2);