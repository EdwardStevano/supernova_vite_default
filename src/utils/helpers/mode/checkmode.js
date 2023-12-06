export const checkmode = () => {
    if (localStorage.getItem('emitMode') === null) {
        localStorage.setItem('emitMode', "false");
    }

    if (localStorage.getItem('emitMode') === "true") {
        document.body.classList.add('darkTheme');
    } else {
        document.body.classList.remove('darkTheme');
    }
}