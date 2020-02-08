function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    //window.alert(`${ano}`)
    var nascimento = window.document.getElementById('txtano').value
    //window.alert(`${nascimento}`)
    var res = window.document.querySelector('div#res')
    if(nascimento == 0 || nascimento > 2019){
        window.alert('Verifique os dados e tente novamente!')
    }else{
        //window.alert('Tudo ok!')
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - nascimento
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        //res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 2){
                //Bebê
                img.setAttribute('src', 'hbb.png')
            }else if(idade < 10){
                //Criança
                img.setAttribute('src', 'hcrianca.png')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'hjovem.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'hadulto.png')
            }else{
                //Idoso
                img.setAttribute('src', 'hidoso.png')
            }
        }if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 2){
                //Bebê
                img.setAttribute('src', 'mbb.png')
            }else if(idade < 10){
                //Criança
                img.setAttribute('src', 'mcrianca.png')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'mjovem.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'madulto.png')
            }else{
                //Idoso
                img.setAttribute('src', 'midoso.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} ano(s)!`
        res.appendChild(img)
    }
}