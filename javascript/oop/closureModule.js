let counter1 = {
    value: 0,
    increase: function () {
        this.value++
    },
    decrease: function () {
        this.value--
    },
    getValue: function () {
        return this.value
    }
}

counter1.increase();//1
counter1.increase();//2
counter1.increase()//3
counter1.decrease();//2
console.log(counter1.getValue());//2

//클로저 모듈 패턴을 이용
function makeCounter() {
    let value = 0;
    return {
        increase: function () {
            value++;
        },
        decrease: function () {
            value--;
        },
        getValue: function () {
            return value;
        }
    }
}

let counter2 = makeCounter();
counter2.increase();//1
counter2.getValue();//1

let counter3 = makeCounter();
counter3.increase();//1
counter3.decrease();//0
counter3.decrease();//-1
counter3.getValue();//-1
