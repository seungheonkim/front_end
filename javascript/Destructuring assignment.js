//구조분해할당
//분해 후 새 변수에 할당
const [a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a);//10
console.log(b);//20
console.log(rest);//[30, 40, 50]

//객체
const {c, d, ...remain} = {c: 10, d: 20, e: 30, f: 40};
console.log(c);//{c : 10}
console.log(d);//{d : 20}
console.log(remain);//{e : 30, f : 40};


//함수에서의 객체 분해
function whois({displayName: displayName, fullName: {firstName: name}}) {
    console.log(displayName + " is " + name);
}

let user = {
    id: 42,
    displayName: "jdoe",
    fullName: {
        firstName: "John",
        lastName: "Doe"
    }
};

whois(user);//jdoe is John