var agora = new Date()
var diaSem = agora.getDay()

/*
0 - Domingo
1 - Segunda
2 - Terça
3 - Quarta
4 - Quinta
5 - Sexta
6 - Sábado
*/

var dia = ''
switch (diaSem) {
    case 0:
        dia = 'Domingo'
        break
    case 1:
        dia = 'Segunda'
        break
    case 2:
        dia = 'Terça'
        break
    case 3:
        dia = 'Quarta'
        break
    case 4:
        dia = 'Quinta'
        break
    case 5:
        dia = 'Sexta'
    case 6:
        dia = 'Sábado'
        break

}
console.log(`Hoje é ${dia}`)