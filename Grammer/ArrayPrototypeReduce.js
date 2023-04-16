//배열 모든 원소에 대해 특정 연산을 순차적으로 적용할 떄 reduce() 사용

//배열 각 요소에 reducer함수 실행 뒤 하나의 결과를 반환
//reducer형태 : (accumulator, currentValue) => 반환값
//currentValue = 각 원소
//반환값은 그 이후 원소에 대해 accumulator에 저장됨

let data = [5, 2, 9, 8, 4]

//minValue구하기
let minValue = data.reduce((a, b) => Math.min(a, b))
console.log(minValue)

//원소합 구하기
let sum = data.reduce((a, b) => a + b)
console.log(sum)
