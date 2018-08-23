(function () {
    let outerArguments = arguments;
    const concat = (...items) => {
        /*
        items rest参数包含了函数所有参数在一个数组中，而arguments对象是来自闭包enclosing作用域获得的，
        因此肯定等于outerArguments
         */
        console.log(arguments === outerArguments); // => true
        return items.reduce((result, item) => result + item, '');
    };
    console.log(concat(1, 5, 'nine')); // => '15nine'
})();