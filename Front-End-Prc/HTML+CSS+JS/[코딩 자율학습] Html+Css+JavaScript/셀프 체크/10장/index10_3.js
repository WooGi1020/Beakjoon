var input1 = prompt("키를 입력하세요");
var input2 = prompt("몸무게를 입력하세요");

const cal = function cal (height, weight) {
    let BMI = weight / ((height/100)**2);
    console.log(BMI);
    if(BMI < 18.5) console.log("저체중");
    else if(BMI >= 24 && BMI <= 25) console.log("과체중");
    else if(BMI >= 26) console.log("비만");
}
cal(input1, input2);