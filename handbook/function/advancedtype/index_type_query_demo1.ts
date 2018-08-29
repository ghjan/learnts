/*
keyof T, the index type query operator索引类型查询操作符
T[K], indexed access operator索引访问操作符
*/

function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map(n => o[n]);
}

interface Person22 {
    name: string;
    age: number;
}

let person22: Person22 = {
    name: 'Jarid',
    age: 35
};
let strings: any[] = pluck(person22, ['name', 'age']); // ok, string[]
console.log(strings)

function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
    return o[name]; // o[name] is of type T[K]
}

let name22: string = getProperty(person22, 'name');
let age: number = getProperty(person22, 'age');
// let unknown = getProperty(person22, 'unknown'); // error, 'unknown' is not in 'name' | 'age'