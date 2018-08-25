class Greeter_generics<T> {
    greeting: T;

    constructor(message: T) {
        this.greeting = message;
    }

    greet() {
        return this.greeting;
    }
}

let greeter_generics = new Greeter_generics<string>("Hello, world");

function bind_button(objGreeter: Greeter_generics<string>, btnElementID: string, btnLabel: string) {
    let button = document.createElement(btnElementID);
    button.textContent = btnLabel;
    button.onclick = function () {
        alert(objGreeter.greet());
    }

    document.body.appendChild(button);
}

bind_button(greeter_generics, 'button', 'Say Hello');
