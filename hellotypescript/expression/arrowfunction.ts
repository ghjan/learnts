//只有一行，不用大括号，也不用写return
var sum = (arg1, arg2) => arg1 + arg2;
//无参数
var somefun = () => {
    console.log(`hello`);
}
//仅仅一个参数，可以省略掉小括号
var somefunc = arg1 => {
    console.log(arg1);
}

//应用场景
/*
箭头表达式
  经常用来声明匿名函数，消除传统js里面的this关键字问题
 */
var myArray = [1, 2, 3, 4, 5];
console.log(myArray.filter(value => value % 2 == 0));