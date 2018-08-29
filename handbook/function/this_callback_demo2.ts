
interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void;
}

class Handler2 {
    info: string='';
    onClickGood = (e: Event) => { this.info = e.message }
}