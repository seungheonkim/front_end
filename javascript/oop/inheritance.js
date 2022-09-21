class HospitalEmployee {
    constructor(name) {
        this.name = name;
        this.remainingvacationDays = 20;
    }

    getName() {
        return this.name;
    }

    getRemainingVacationDays() {
        return this.remainingvacationDays;
    }

    takeVacationDays(daysOff) {
        this.remainingvacationDays -= daysOff;
    }
}

//inheritance
class Nurse extends HospitalEmployee {
    constructor(name, certification) {
        super(name);
        this.certification = certification;
    }

    addCertification() {
    }
}

const nurseOlynyk = new Nurse('Olynyk',['Trauma', 'Pediatrics']);

console.log(nurseOlynyk.getName());
console.log(nurseOlynyk.getRemainingVacationDays());
nurseOlynyk.takeVacationDays(10);//20-10
console.log(nurseOlynyk.getRemainingVacationDays());//10