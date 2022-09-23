const printString = (string, callback) => {
    setTimeout(
        () => {
            console.log(string)
            callback()
        },
        Math.floor(Math.random() * 100) + 1
    )
}

const printAll = () => {
    printString('a', () => {
        printString('b', () => {
            printString('c', () => {
            });
        });
    });
}

console.log(printAll());