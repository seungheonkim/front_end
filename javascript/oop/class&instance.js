class Car {
    constructor(brand, name, color, fuel) {
        this.brand = brand;
        this.name = name;
        this.color = color;
        this.fuel = fuel;
    }

    //출고 메서드
    buy() {
        console.log('당신이 구매한 차량은: ' + this.name);
        console.log('차량 브랜드: ' + this.brand);
        console.log('차량 색상: ' + this.color);
    }

    //drive 메서드
    drive() {
        console.log(this.name + '가 운전을 시작합니다');
        this.fuel = this.fuel - 2;
    }

    //fuel 확인 메서드
    checkFuel() {
        console.log('현재 잔여 기름: ' + this.fuel);
    }

    refuel() {
        console.log('기름 잔여량: ' + this.fuel);
        console.log('기름을 충전합니다...');
        this.fuel += 4;
        console.log('기름 주유 완료! 현재 잔여량: ' + this.fuel);
    }
}

let avante = new Car('현대', '아반떼', '파란색', 10);

console.log(avante.buy());
console.log(avante.checkFuel());
console.log(avante.drive());
console.log(avante.checkFuel());
console.log(avante.refuel());
console.log(avante.refuel());
