function contar() {
    var inicio = eval(window.document.getElementById('inicio').value)
    var fim = eval(document.getElementById('fim').value)
    var passo = eval(document.getElementById('passo').value)
    var res = document.getElementById('res')

    for (var calculando = inicio; calculando <= fim; calculando += passo) {
        res.innerHTML += ` ${calculando} `
    }

}