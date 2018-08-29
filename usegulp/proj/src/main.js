"use strict";
// import {sayHello} from "./greet";
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(sayHello("TypeScript"));
const greet_1 = require("./greet");
function showHello(divName, name) {
    const elt = document.getElementById(divName);
    elt.innerText = greet_1.sayHello(name);
}
showHello("greeting", "TypeScript, Gulp, Browserify, tsify, watchify, gutil");
