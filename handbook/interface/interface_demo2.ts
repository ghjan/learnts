interface SquareConfig {
    color?: string;
    width?: number;

    [propName: string]: any;
}

function createSquare2(config: SquareConfig): { color: string; area: number } {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        // Error: Property 'clor' does not exist on type 'SquareConfig'
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare2 = createSquare2({colour: "red", width: 100});
console.log(mySquare2);