/*
gulp源码解析（一）—— Stream详解
https://www.cnblogs.com/vajoy/p/6349817.html
*/
//demo1.js
'use strict';
const Readable = require('stream').Readable;
const rs = Readable();
const s = 'VaJoy';
const l = s.length;
let i = 0;
rs._read = ()=>{
    if(i == l){
        rs.push(' is my name');
        return rs.push(null)
    }
    rs.push(s[i++])
};
rs.pipe(process.stdout);