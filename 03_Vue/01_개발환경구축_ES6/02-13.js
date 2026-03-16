// let obj = { result: 0 };

// //JavaScript this 바인딩 문제
// obj.add = function (x, y) {
//   function inner() {
//     //this는 뭘까? => globals
//     this.result = x + y;
//   }
//   //일반함수 호출 시에 this는 전역객체를 참조
//   //inner함수의 this는 global (node), window
//   inner();
// };
// obj.add(3, 4);
// // console.log(obj); //{ result: 0, add: [Function (anonymous)] }
// // console.log(result); // 7

// console.log(globalThis.result);

//앞의 바인딩 문제를 해결하는 방법
//1. 화살표 함수: 호출된 상위 객체의 this를 가리킴
// let obj = { result: 0 };

// obj.add = function (x, y) {
//   //화살표 함수 안의 this: 상위 scope의 this
//   const inner = () => {
//     this.result = x + y;
//   };
//   inner();
// };
// obj.add(3, 4);
// console.log(obj);

//2. bind()로 명시적 바인딩
//함수의 this 값을 특정 객체의 영구적으로 바인딩한 새로운 함수를 반환
//첫번째 인자로 전달된 객체가 this로 설정됨
let obj = { result: 0 };

obj.add = function (x, y) {
  function inner() {
    this.result = x + y;
  }
  // inner함수의 this를 obj객체로 바인딩하여 호출
  inner.bind(obj)();
};
obj.add(3, 4);
console.log(obj);
