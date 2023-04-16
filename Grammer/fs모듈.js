//js용 기본 입력 모듈
//입력 데이터가 '텍스트 파일'형태로 주어지는 경우 fs모듈(file system 모듈)을 사용한다.
//전체 텍스트를 읽어온 뒤, 줄 바꿈 기호를 기준으로 구분해서 리스트로 변환

//예: /dev/stdin 파일에 적인 텍스트를 읽어오는 경우 
/*
    let fs = require('fs');
    let input = fs.readFileSync('/dev/stdin').toString().split('\n')
    let input2 = fs.readFileSync('input.txt').toString().split('\n')

    console.log(input)
*/

let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');
console.log(input) //[ '123', '456', '789 1000' ]

//가능하면 readline 모듈보다 fs를 이용해 팡리 전체를 읽어 들여 처리하는게 대개 빠름

