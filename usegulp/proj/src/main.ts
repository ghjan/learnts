// import {sayHello} from "./greet";

// console.log(sayHello("TypeScript"));

import {sayHello} from "./greet";

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
}

showHello("greeting", "TypeScript, Gulp, Browserify, tsify, watchify, gutil");
