/*
消除了js里面this关键字问题，this经常和写代码的人预想的不一致
下面的例子，把原先的函数使用箭头函数重写了
 */
let getStock1 = (name) => {
    setInterval(function () {
        console.log("name is:" + this.name);
    }, 1000);
}

stock = getStock1("IBM");

let getStock22 = (name: string) => {
    setInterval(() => {
        console.log("name is:" + this.name)
    }, 1000);
}

stock2 = getStock22("IBM2");