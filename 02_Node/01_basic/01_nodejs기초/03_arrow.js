//화살표 함수
let getTriangle = (base, height) => {
  (base * height) / 2;
  //추가 코드 작성
};

console.log('삼각형의 면적:' + getTriangle(5, 2));

//
const person = {
  name: 'bear',

  //일반 함수 (결과: bear)
  hello1: function () {
    console.log('일반함수:', this);
  },
  //화살표 함수 (결과: undefined)
  hello2: () => {
    console.log('화살표함수:', this);
  },
};

person.hello1();
person.hello2();
