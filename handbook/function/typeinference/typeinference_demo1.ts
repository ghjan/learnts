window.onmousedown = function(mouseEvent) {
    console.log(mouseEvent.button);  //<- Error
};

// window.onmouseup = function(mouseEvent: any) {
//     console.log(mouseEvent.button);  //<- Now, no error is given
// };