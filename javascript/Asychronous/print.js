const printString = (string) => {
    setTimeout(
        () => {
            console.log(string);
        },
        Math.floor(Math.random() * 100) + 1
    )
}

const printAll = () => {
    printString('a');
    printString('b');
    printString('c');
}

console.log(printAll());