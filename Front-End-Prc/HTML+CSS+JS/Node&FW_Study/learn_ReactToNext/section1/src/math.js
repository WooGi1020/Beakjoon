export function add(a, b){
  return a + b;
}

export function sub(a,b){
  return a-b;
}

export default function mul(a, b){ // 대표 모듈
  return a*b;
}

// CJS
// module.exports = { // 모듈이 내보낼 값 정의
//   add,
//   sub,
// };