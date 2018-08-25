type NameOrNameArray_raytracer = string | string[];

function createName_raytracer(name: NameOrNameArray_raytracer) {
    if (typeof name === "string") {
        return name;
    }
    else {
        return name.join(" ");
    }
}

var greetingMessage = `Greetings, ${ createName_raytracer(["Sam", "Smith"]) }`;
console.l(greetingMessage);