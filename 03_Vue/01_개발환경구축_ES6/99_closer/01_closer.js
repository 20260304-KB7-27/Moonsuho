function outer() {
  let count = 0;
  /*
    클로저
    - 반환된 내부 함수가 자신이 선언됐을 때의 환경인 스코프를 기억하여, 자신이 선언되었을 때의 환경 밖에서도 스코프에 접근할 수 있는 함수
    */
  function inner() {
    count++; // outer함수의 지역변수

    console.log(count);
  }
  return inner; //호출하는게 아니라 함수 자체를 반환하는 거라 ()가 없는 것
}

outer()();
outer()();
outer()();

const counter = outer(); //반환받은 inner()

counter();
counter();
counter();
