//한 줄씩 입력받아서 처리.
//fs를 추천하지만, fs를 사용하지 못할 경우 사용하는 것을 추천

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let input = []
rl.on('line', function(line) {
    //콘솔 입력 창에서 줄바꿈(enter) 입력할 떄마다 호출
    input.push(line);
}).on('close', function() {
    //콘솔 입력 창에서 ctrl + c 혹은 ctrl + d를 입력하면 호출(입력의 종료)
    console.log(input)
    process.exit()
})