// 函数参数双向协变
enum MyEventType { Mouse, Keyboard }

interface MyEvent {
    timestamp: number;
}

interface MouseMyEvent extends MyEvent {
    readonly  x: number;
    readonly y: number
}

interface KeyMyEvent extends MyEvent {
    keyCode: number
}

function listenMyEvent(eventType: MyEventType, handler: (n: MyEvent) => void) {
    /* ... */
}

// Unsound, but useful and common
listenMyEvent(MyEventType.Mouse, (e: MouseMyEvent) => console.log(e.x + ',' + e.y));

// Undesirable alternatives in presence of soundness
listenMyEvent(MyEventType.Mouse, (e: MyEvent) => console.log((<MouseMyEvent>e).x + ',' + (<MouseMyEvent>e).y));
listenMyEvent(MyEventType.Mouse, <(e: MyEvent) => void>((e: MouseMyEvent) => console.log(e.x + ',' + e.y)));

// Still disallowed (clear error). Type safety enforced for wholly incompatible types
listenMyEvent(MyEventType.Mouse, (e: number) => console.log(e));