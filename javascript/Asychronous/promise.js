const printString = (string) => {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                console.log(string)
                resolve()
            },
            Math.floor(Math.random() * 100) + 1
        )
    })
}

const printAll = () => {
    printString('a')
        .then(() => {
            return printString('b')
        })
        .then(() => {
            return printString('c')
        })
}

console.log(printAll());