/*
类型别名
另一方面，如果你无法通过接口来描述一个类型并且需要使用联合类型或元组类型，这时通常会使用类型别名。


 */
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;

function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}


type Tree<T> = {
    value: T;
    left: Tree<T>;
    right: Tree<T>;
}


type LinkedList<T> = T & { next: LinkedList<T> };

interface Person {
    name: string;
}

var people: LinkedList<Person>;
// var s = people.name;
// var s2 = people.next.name;
// var s3 = people.next.next.name;
// var s3 = people.next.next.next.name;
//
