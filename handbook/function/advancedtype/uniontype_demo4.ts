// function broken(name: string | null): string {
//   function postfix(epithet: string) {
//     return name.charAt(0) + '.  the ' + epithet; // error, 'name' is possibly null
//   }
//   name = name || "Bob";
//   return postfix("great");
// }

/*
如果编译器不能够去除 null或 undefined，你可以使用类型断言手动去除。 语法是添加 !后缀： identifier!从 identifier的类型里去除了 null和 undefined：
 */
function fixed(name: string | null): string {
    function postfix(epithet: string) {
        return name!.charAt(0) + '.  the ' + epithet; // ok
    }

    name = name || "null";  // 使用短路运算符
    return postfix("great");
}

console.log(fixed("test fixed"));
console.log(fixed(null));