function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora sao ${hora}:${min} horas`

    if (hora >= 0 && hora < 12) {
        saudacao.innerHTML='Bom Dia'
        img.src = "img/manha.png"
        document.body.style.background = "#055ef3"
    } else if (hora >= 12 && hora < 18) {
        saudacao.innerHTML='Boa Tarde'
        img.src = "img/tarde.png"
        document.body.style.background = "#05a7f3"
    } else {
        saudacao.innerHTML='Boa Noite'
        img.src = "img/noite.png"
        document.body.style.background = "#182e7a"
    }
}