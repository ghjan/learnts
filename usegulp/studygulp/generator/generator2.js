/*
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/function*
生成器也可以接收参数
*/
function* idMaker() {
    var index = arguments[0] || 0;
    while (true)
        yield index++;
}

var gen = idMaker(5);
console.log(gen.next().value); // 5
console.log(gen.next().value); // 6