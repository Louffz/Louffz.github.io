let res = document.getElementById('res')
function selecionou(valor) {
if(valor == 'bronze') {
    res.innerHTML = '<iframe width="500" height="281.25" src="https://www.youtube.com/embed/SEz5Fc8h5Ng?start=76" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    res.innerHTML += '<h1>Configure Sua Camera</h1>Exemplo de Camera boa: <img src="Captura de tela 2021-01-13 105142.jpg" alt="Camera Firewal154" style="width: 500px;">'
} else if (valor == 'prata') {
    res.innerHTML = '<iframe width="500" height="281.25" src="https://www.youtube.com/embed/SEz5Fc8h5Ng?start=139" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    res.innerHTML += '<h1>Rotina de Treino Símples</h1><p>Treine Chute'
} else if (valor == 'ouro'){
    res.innerHTML = '<iframe width="500" height="281.25" src="https://www.youtube.com/embed/SEz5Fc8h5Ng?start=255" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
} else if (valor == 'Plat'){
    res.innerHTML = '<iframe width="500" height="281.25" src="https://www.youtube.com/embed/SEz5Fc8h5Ng?start=387" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
}else if (valor == 'D'){
    res.innerHTML = '<iframe width="500" height="281.25" src="https://www.youtube.com/embed/SEz5Fc8h5Ng?start=507" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
} else if (valor == 'C'){
    res.innerHTML = '<iframe width="500" height="281.25" src="https://www.youtube.com/embed/SEz5Fc8h5Ng?start=597" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
} else {
    res.innerHTML = '<h1>Em Breve...</h1>'
}
} 




function entrou() {
    document.getElementById('copy').style.color='black'
}
function saiu() {
    document.getElementById('copy').style.color='white'
}
