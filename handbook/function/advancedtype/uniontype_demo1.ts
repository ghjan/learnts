/**
 * Takes a string and adds "padding" to the left.
 * If 'padding' is a string, then 'padding' is appended to the left side.
 * If 'padding' is a number, then that number of spaces is added to the left side.
 * 使用了union type，不在联合类型里面的会在编译时报错，好过在运行时报错
 */
function padLeft(value: string, padding: string | number) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}

console.log(padLeft("Hello world", 4)); // returns "    Hello world"
console.log(padLeft("Hello world", "(from ts)")); // returns "(from ts)Hello world"
let indentedString = padLeft("Hello world", true); // 不在联合类型里面的会在编译时报错，好过在运行时报错
