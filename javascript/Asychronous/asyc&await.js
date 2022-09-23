function gotCodeStates() {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve('1. go to codestates')
        }, 100)
    })
}
function sitAndCode() {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve('2. sit and code')
        }, 100)
    })
}
function eatLunch() {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve('3. eat lunch')
        }, 100)
    })
}
function gotoBed() {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve('4. go to bed')
        }, 100)
    })
}

const result = async() => {
    const one = await gotCodeStates();
    console.log(one);

    const two = await sitAndCode();
    console.log(two);

    const three = await eatLunch();
    console.log(three);

    const four = await gotoBed();
    console.log(four);
}

result();