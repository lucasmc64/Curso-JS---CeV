let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vertor é ${num[0]}`)
n = 4
let pos = num.indexOf(n)
if (pos == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor ${n} está na posição ${pos}`)
}