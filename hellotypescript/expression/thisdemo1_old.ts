/*
消除了js里面this关键字问题，this经常和写代码的人预想的不一致
下面的例子，没有打印IBM，但是打印了IBM2
 */
function getStock(name: string) {
    this.name = name;
    setInterval(function () {
        console.log("name is:" + this.name);
    }, 1000);
}

var stock = new getStock("IBM");

function getStock2(name: string) {
    this.name = name;
    setInterval(() => {
        console.log("name is:" + this.name)
    }, 1000);
}

var stock2 = new getStock2("IBM2");