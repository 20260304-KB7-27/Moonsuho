// const path = require('path');
//package.json에 type: module추가하면 아래와 같이 가져다 쓸 수 있음
import path from 'path'; //esm

/*
path 모듈
- 파일 경로나 디렉토리 경로를 다루는 모듈
- 운영체제간의 경로를 구분하는 구분자가 다른데 -> 통일가능
*/
const fullPath = path.join('some', 'work', 'ex.txt');
console.log(fullPath);
