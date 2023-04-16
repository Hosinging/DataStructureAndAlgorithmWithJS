//특정 원소 등장 여부를 파악할 때 set을 효과적으로 사용할 수 있다.
let mySet = new Set()

mySet.add(3)
mySet.add(5)
mySet.add(7)
mySet.add(3)

console.log(`원소 갯수: ${mySet.size}`)
console.log(`원소 7을 포함하고 있는가? ${mySet.has(7)}`)

//원소 5 제거
mySet.delete(5)

//원소 하나씩 출력
for (let item of mySet) console.log(item)