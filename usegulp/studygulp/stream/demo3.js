/*
gulp源码解析（一）—— Stream详解
https://www.cnblogs.com/vajoy/p/6349817.html
*/
//demo3
const Readable = require('stream').Readable;

class ToReadable extends Readable {
    constructor(iterator) {
        super();
        this.iterator = iterator
    }
    _read() {
        const res = this.iterator.next();
        if (res.done) {
            // 迭代结束，顺便结束可读流
            this.push(null)
        }else{
            setTimeout(() => {
                // 将数据添加到流中
                this.push(res.value + '\n')
            }, 0)            
        }


    }
}
/*
function* 这种声明方式(function关键字后跟一个星号）会定义一个生成器函数 (generator function)，它返回一个  Generator  对象。
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/function*
*/
const gen = function* (a) {
    let count = 5,
        res = a;
    while (count--) {
        res = res * res;
        yield res
    }
};

const readable = new ToReadable(gen(2));

// 监听`data`事件，一次获取一个数据
readable.on('data', data => process.stdout.write(data));

// 可读流消耗完毕
readable.on('end', () => process.stdout.write('readable stream ends~'));

readable.on('error', (err ) => process.stdout.write('error occurs!!'+err));