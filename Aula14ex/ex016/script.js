var res = window.document.querySelector('div#res')
var p = window.document.createElement('p')
p.setAttribute('id', 'contar')
res.appendChild(p)
function iniciar() {
    p.innerHTML = 'Preparando a contagem...'
}
var p2 = window.document.createElement('p')
p2.setAttribute('id', 'contando')
res.appendChild(p2)
p2.style.verticalAlign = 'middle'
function contar() {
    p2.innerHTML = ''
    var i = window.document.querySelector('input#txtinicio')
    var inicio = Number(i.value)
    var f = window.document.querySelector('input#txtfim')
    var fim = Number(f.value)
    var p = window.document.querySelector('input#txtpasso')
    var passo = Number(p.value)
    p.innerHTML = 'Contando: '
    if (i.value.length == 0 || p.value.length == 0 || f.value.length == 0) {
        p2.innerHTML = 'Impossível contar!'
    } else if (passo == 0) {
        window.alert('Passo Inválido!')
    } else {
        if (inicio <= fim) {
            for (inicio; inicio <= fim; inicio = inicio + passo) {
                p2.innerHTML += `${inicio} 👉 `
            }
        } else if (inicio > fim) {
            for (inicio; inicio >= fim; inicio = inicio - passo) {
                p2.innerHTML += `${inicio} 👉 `
            }
        }
        p2.innerHTML += `🏳️‍🌈`
    }
}