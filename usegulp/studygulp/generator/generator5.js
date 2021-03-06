/*
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/function*

使用迭代器遍历二维数组并转换成一维数组
*/
function* iterArr(arr) { //迭代器返回一个迭代器对象
    if (Array.isArray(arr)) { // 内节点
        for (let i = 0; i < arr.length; i++) {
            yield* iterArr(arr[i]); // (*)递归
        }
    } else { // 离开     
        yield arr;
    }
}
// 使用 for-of 遍历:
var arr = ['a', ['b', 'c'],
    ['d', 'e']
];
for (var x of iterArr(arr)) {
    console.log(x); // a  b  c  d  e
}

// 或者直接将迭代器展开:
var arr = ['a', ['b', ['c', ['d', 'e']]]];
var gen = iterArr(arr);
arr = [...gen]; // ["a", "b", "c", "d", "e"]
console.log(arr);