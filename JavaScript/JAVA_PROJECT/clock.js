const dateElement = document.getElementById("date");
const timeElement = document.getElementById("time");

const modifyNum = (number) => {
    return parseInt(number < 10 ? "0" + number : number);
}

const getNowDate = () => {
    const nowDate = new Date();
    const week = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
    let month = modifyNum(nowDate.getMonth() + 1);
    let date = modifyNum(nowDate.getDate());
    let day = nowDate.getDay();
    setNowDate(month, date, week[day])
}

const setNowDate = (month, date, day) => {
    dateElement.textContent = `${month}월 ${date}일 ${day}`;
}

const getNowTime = () => {
    const nowDate = new Date();
    let hour = modifyNum(nowDate.getHours());
    let min = modifyNum(nowDate.getMinutes());
    setNowTime(hour, min);
}

const setNowTime = (hour, min) => {
    if(min < 10){
        timeElement.textContent = `${hour} : 0${min}`;
    }else{
        timeElement.textContent = `${hour} : ${min}`;
    }
}

getNowDate();
getNowTime();

setInterval(getNowTime, 1000);
    

