/*
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/function*
传递参数
*/
function* createIterator() {
    let first = yield 1;
    let second = yield first + 2; // 4 + 2 
    // first =4 是next(4)将参数赋给上一条的
    yield second + 3; // 5 + 3
}

let iterator = createIterator();

console.log(iterator.next()); // "{ value: 1, done: false }"
console.log(iterator.next(4)); // "{ value: 6, done: false }"
console.log(iterator.next(5)); // "{ value: 8, done: false }"
console.log(iterator.next()); // "{ value: undefined, done: true }"