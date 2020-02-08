function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    hora = 13
    msg.innerHTML = `Agora são ${hora} hora(s).`
    if(hora >= 0 && hora < 12){
        //Bom dia!
        img.src = 'cursojs-manha.png'
        window.document.body.style.background = '#EBA172'
    }else if(hora >=12 && hora <18){
        //Boa tarde!
        img.src = 'cursojs-tarde.png'
        window.document.body.style.background = '#5F2F25'
    }else{
        //Boa noite!
        img.src = 'cursojs-noite.png'
        window.document.body.style.background = '#2C3D5D'
    }
}