interface IPerson {
    name: string;
    age: number;
}

class Greeter {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    greet() {
        return "Hello, " + this.name;
    }

}
function sortByName(a: IPerson[]) {
    var result = a.slice(0);
    result.sort((x, y) => {
        return x.name.localeCompare(y.name);
    });
    return result;
}

sortByName([]);
