class Control {
    private state: any;

    dome(): number {
        return 0
    };
}

interface SelectableControl extends Control {
    select(): void;
}

interface SelectableControl1 extends Control {
    selec1(): void;
}

class Button extends Control implements SelectableControl, SelectableControl1 {
    dome(): number {
        return 1
    };

    selec1(): void {
    }

    select() {
    }
}

class TextBox extends Control {
    select() {
    }
}

// 错误：“Image”类型缺少“state”属性。
class Image2 extends Control implements SelectableControl {
    select() {
    }
}

class Location2 {

}