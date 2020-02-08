let array = []
let lista = window.document.querySelector("select#lista")
let res = window.document.querySelector("div#res")
let inp = window.document.getElementById("num")
function add() {
    let num = Number(inp.value)
    //console.log(typeof(num))
    let verificar = 0
    console.log(inp.value.length)
    if (inp.value.length == 0 || num < 1 || num > 100 || array.indexOf(num) != -1) {
        window.alert("O valor é inválido ou já encontrado na lista!")
        return false
    }
    /*
    for (let i = 0; i < array.length; i++) {
        if (array[i] == num || ) {
            window.alert("O valor é inválido ou já encontrado na lista!")
            return false
        }
    }
    */
    array.push(num)
    let op = window.document.createElement('option')
    op.setAttribute('value', `v${array.length}`)
    lista.appendChild(op)
    op.innerHTML = `Valor ${num} adicionado.`
    inp.value = ''
    inp.focus()
    res.innerHTML = ''
}

var l1 = window.document.createElement('p')
var l2 = window.document.createElement('p')
var l3 = window.document.createElement('p')
var l4 = window.document.createElement('p')
var l5 = window.document.createElement('p')

function finalizar() {
    if (lista.length == 0) {
        window.alert("Adicione valores antes de finalizar!")
    } else {
        var maior = array[0]
        var menor = array[0]
        var s = 0
        for (let i = 0; i < array.length; i++) {
            /*
            if (i == 0) {
                maior = array[i]
                menor = array[i]
            }
            */
            if (maior < array[i]) {
                maior = array[i]
            }
            if (menor > array[i]) {
                menor = array[i]
            }
        }
        for (let i in array) { s += array[i] }
        res.appendChild(l1)
        res.appendChild(l2)
        res.appendChild(l3)
        res.appendChild(l4)
        res.appendChild(l5)
        l1.innerHTML = `Ao todo temos ${array.length} números cadastrados!`
        l2.innerHTML = `O maior valor informado foi ${maior}!`
        l3.innerHTML = `O menor valor informado foi ${menor}!`
        l4.innerHTML = `Somando todos os valores, temos ${s}!`
        l5.innerHTML = `A média dos valores digitados é ${s / array.length}!`
    }
}