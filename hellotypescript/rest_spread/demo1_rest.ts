function sumOnlyNumbers(...args) {
    var numbers = filterNumbers();
    return numbers.reduce((sum, element) => sum + element);

    function filterNumbers() {
        return args.filter(element => typeof element === 'number');
    }
}

let result = sumOnlyNumbers(1, 'Hello', 5, false); // => 6
console.log(result)