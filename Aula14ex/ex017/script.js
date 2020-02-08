var numero = window.document.querySelector('input#txtnum')
var lista = window.document.querySelector('select#lista')
function iniciar(){
    window.document.querySelector('section#corpo').style.textAlign = 'center';
    var option = window.document.createElement('option')
    lista.appendChild(option)
    option.innerHTML = 'Digite um número acima!'
}
function gerar() {
    var num = Number(numero.value)
    lista.innerHTML = ''
    if (numero.value.length == 0) {
        window.alert('Digite um número, por favor!')
        iniciar()
    } else {
        for (var i = 0; i <= 10; i++) {
            var option = window.document.createElement('option')
            option.setAttribute('value', `v${i}`)
            lista.appendChild(option)
            option.innerHTML = `${num} * ${i} = ${num * i}`
        }
    }
}