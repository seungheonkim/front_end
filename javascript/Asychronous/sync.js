const drink = (person, coffee) => {
    console.log(person + '는 ' + coffee + '를 마십니다');
}

const orderCoffeeSync = (coffee) => {
    console.log(coffee + '가 접수되었습니다');
    return coffee;
}

let customers = [{
    name: 'Steve',
    request: '카페라떼',
}, {
    name: 'John',
    request: '아메리카노',
}];

//call synchronously
customers.forEach(function (customer) {
    let coffee = orderCoffeeSync(customer.request);
    drink(customer.name, coffee);
})