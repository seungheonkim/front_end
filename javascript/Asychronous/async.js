const waitSync = (callback, ms) => {
    //특정 시간 이후에 callback 함수가 실행되게끔 하는 브라우저 내장 기능
    setTimeout(callback, ms);
}

const drink = (person, coffee) => {
    console.log(person + '는 ' + coffee + '를 마십니다');
}

let customers = [{
    name: 'Steve',
    request: '카페라떼',
}, {
    name: 'John',
    request: '아메리카노',
}];

const orderMenuAsync = (menu, callback) => {
    console.log(menu + '가 접수되었습니다');
    waitSync(function () {
        callback(menu);
    }, 2000);
}

//call asynchronously
customers.forEach(function (customer) {
    let coffee = orderMenuAsync(customer.request, function (coffee) {
        drink(customer.name, coffee);
    });
})