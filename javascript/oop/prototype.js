function Person(first, last, age, gender, interests) {

    // 속성과 메소드 정의
    this.first = first;
    this.last = last;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}

let person1 = new Person('Bob', 'Smith', 30, 'Male', ['basketball', 'tennis']);

//1. person1 객체에 valueOf() 메서드가 있는지 확인 -> x
//2. person1의 프로토타입 객체인 Person() 에 valueOf() 메서드 잇는 지 확인 -> x
//3. Person 생성자의 프로토타입 객체인 Object() 에 valueOf() 있는지 확인 -> o -> 사용!
//시피 체인을 타고 올라가며 접근
console.log(person1.valueOf());

let person2 = Object.create(person1);

//prototype example
const car = {
    wheels: 4,

    drive() {
        console.log('drive..');
    }
};

const bmw = {
    color: 'red',
    navigation: 1,
};

const benz = {
    color: 'black',
};

const audi = {
    color: 'blue',
};

const x5 = {
    color: 'white',
}


//bmw, benz, audi 의 부모 역할로서의 프로토타입으로 car 을 설정
bmw.__proto__ = car;
benz.__proto__ = car;
audi.__proto__ = car;

//x5 는 bmw를 상속, 부모 역할로서의 프로토타입으로 bmw를 설정
x5.__proto__ = bmw;

