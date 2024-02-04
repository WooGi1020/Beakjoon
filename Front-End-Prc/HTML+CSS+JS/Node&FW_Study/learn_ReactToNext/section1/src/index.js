// CJS
// const {add, sub} = require('./math'); // 내보내진 값 가져오기

// ESM, ESM 대표 모듈 불러오기
import mul, {add, sub} from "./math.js";
import randomColor from "randomcolor";

const color = randomColor();
console.log(color);
