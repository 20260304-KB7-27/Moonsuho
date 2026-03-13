const fs = require('fs'); //fs 모듈 가져오기

//동기방식
// let files = fs.readdirSync('./'); //현재 위치 (working dir)
// //직접 실행 시켰을 때 working dir이 다르다.
//  ->  터미널로 01_path 폴더 안으로 들어가서 실행하면 01_path만 나옴
// console.log(files);

//콜백 방식
// let files = fs.readdir('./', (err, files) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(files);
// });

//Promise 방식
fs.promises
  .readdir('./')
  .then((files) => {
    console.log(files);
  })
  .catch((err) => {
    console.error(err);
  });
