var arr = prompt("");

const max = function max([...arr]) {
    let maxnum = 0;
    for(let i = 0; i<arr.length; i++){
        if(maxnum <= arr[i]){
            maxnum = arr[i];
        }
    }
    return maxnum;
}

let result = max(arr);
console.log(`가장 큰 수는 ${result}입니다.`);