var input = prompt("");
const getArea = function getArea(num) {
    let result = (num ** 2) * 3.14;
    return result;
}

let result = getArea(input);

console.log(`지정하신 반지름의 원 넓이는 ${result}입니다.`);