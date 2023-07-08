function calcular() {
    var gasolina = document.getElementById('val_gas')
    var etanol = document.getElementById('val_etn')
    var vgas = Number(gasolina.value)
    var vetn = Number(etanol.value)
    var opc = document.getElementsByName('radopc')
    var res = document.getElementById('res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (opc[0].checked) {
        divisao = vetn / vgas
        if (divisao < 0.70) {
            usar = 'Etanol / Álcool'
            document.body.style.background = '#79B939'
            img.setAttribute('src', 'etanol.png')
        } else {
            usar = 'Gasolina'
            document.body.style.background = '#F97330'
            img.setAttribute('src', 'gasolina.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `A melhor opção de abastecimento é ${usar}!`
    res.style.padding = 8
    res.appendChild(img)
}