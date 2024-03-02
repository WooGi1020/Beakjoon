const timeKor = ['오', '전', '후', '열', '한', '두', '세', '네', '다', '여', '섯', '일', '곱',
                '덟', '아', '홉', '시', '이', '삼', '사', '오','십','일','이','삼','사','오','육', '칠', '팔', '구', '분', '이', '삼', '사', '오','십','일','이','삼','사','오','육', '칠', '팔', '구','초', '🕰️'];

const ojeonhoo = (h) => {
  let korean = '오'
  if(h < 12) {
     korean += '전';
  }else{
     korean += '후';
  }
  return korean;
} 

const hourKor = (h) => {
  let korean = '';
  
  if(h.ten != 0 || h.ten == -2){
    korean += '열'
  }
  switch(h.one){
    case -2:
      korean += '두';
      break;
    case 1:
      korean += '한';
      break;
    case 2:
      korean += '두';
      break;
    case 3:
      korean += '세';
      break;
    case 4:
      korean += '네';
      break;
    case 5:
    case 6:
      korean += (h.one === 5) ? '다섯' : '여섯';
      break;
    case 7:
      korean += '일곱';
      break;
    case 8:
      korean += '여덟';
      break;
    case 9:
      korean += '아홉';
      break;
  }
  korean += '시';
  return korean;
}

const minsecKor = (m) => {
  let korean = ''
  if(m.ten !== 0){
    switch(m.ten){
      case 2:
        korean += '이';
        break;
      case 3:
        korean += '삼';
        break;
      case 4:
        korean += '사';
        break;
      case 5:
        korean += '오';
        break;
    }
    korean += '십';
  }
  switch(m.one){
    case(1):
      korean += "일"; break;
    case(2):
      korean += "이"; break;
    case(3):
      korean += "삼"; break;
    case(4):
      korean += "사"; break;
    case(5):
      korean += "오"; break;
    case(6):
      korean += "육"; break;
    case(7):
      korean += "칠"; break;
    case(8):
      korean += "팔"; break;
    case(9):
      korean += "구"; break;
    }
    if(m.name == 'm'){
      korean += '분';
    }else{
      korean += '초';
    }
    return korean;
}


let time = () => {
  let time = '';
  const date = new Date();
  const h = date.getHours();
  const hobj = {};
  hobj.ten = Math.floor((h-12) / 10);
	hobj.one = (h-12) % 10;

  const m = date.getMinutes();
  const mobj = {};
  mobj.name = 'm'
  mobj.ten = Math.floor(m / 10);
  mobj.one = m % 10;


  const s = date.getSeconds();
  const sobj = {};
  sobj.name = 's';
  sobj.ten = Math.floor(s/10);
  sobj.one = s % 10;

  time = ojeonhoo(h) + hourKor(hobj) + minsecKor(mobj) + minsecKor(sobj);
  
  let watch = document.querySelector(".korean-watch");
	let k = 0;
  let kor = "";

  timeKor.forEach((element, index) => {
    if (index % 8 === 0 && index !== 0) {
      kor += "<br>";
    }

    if (time[k] === element) {
      kor += "<span>" + element + "</span>";
      k++;
    } else {
      kor += element;
    }
  });
    watch.innerHTML = kor;
    kor='';
}

window.onload = () => {
  time();
  setInterval('time()', 1000);
}
              