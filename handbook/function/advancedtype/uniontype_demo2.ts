/*
如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员。

 */
interface Bird {
    fly(): any;

    layEggs(): any;
}

interface Fish {
    swim(): any;

    layEggs(): any;
}

function getSmallPet(pet: Fish | Bird): Fish | Bird {
    return pet;
}

let bird: Bird;

let pet = getSmallPet(bird);
pet.layEggs(); // okay
// pet.swim();    // errors

// 每一个成员访问都会报错
if (pet.swim) {
    pet.swim();
}
else if (pet.fly) {
    pet.fly();
}

// 如果要使用各自独有的方法，使用类型断言

if ((pet as Fish).swim) {
    (<Fish>pet).swim();
}
else {
    (<Bird>pet).fly();
}
// 类型谓词
// pet is Fish就是类型谓词
function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
}

// 'swim' 和 'fly' 调用都没有问题了

if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}