function escolher() {
    let select = document.querySelector("#jogadores")
    let value = select.options[select.selectedIndex].value;
    let img = document.querySelector("#foto")
    let nome = document.querySelector("#nome")
    let idade = document.querySelector("#idade")
    let camisa = document.querySelector("#camisa")
    let posicao = document.querySelector("#posicao")
    
    if (value == 'santos') {
        img.style.display = 'block'
        img.src = 'imagens/santos.jpeg'
        nome.innerHTML = 'ADERBAR DOS SANTOS NETO'
        idade.innerHTML = 'Idade: 33 anos'
        camisa.innerHTML = 'Manto N°1'
        posicao.innerHTML = 'Goleiro'
        
    } else if (value == 'hugo') {
        img.style.display = 'block'
        img.src = 'imagens/hugo.jpeg'
        nome.innerHTML = 'HUGO DE SOUZA NOGUEIRA'
        idade.innerHTML = 'Idade: 24 anos'
        camisa.innerHTML = 'Manto N°45'
        posicao.innerHTML = 'Goleiro'
        
    } else if (value == 'matheus') {
        img.style.display = 'block'
        img.src = 'imagens/matheus.jpeg'
        nome.innerHTML = 'MATHEUS CUNHA'
        idade.innerHTML = 'Idade: 21 anos'
        camisa.innerHTML = 'Manto N°25'
        posicao.innerHTML = 'Goleiro'
        
    } else if (value == 'david') {
        img.style.display = 'block'
        img.src = 'imagens/david.jpeg'
        nome.innerHTML = 'DAVID LUIZ MOREIRA MARINHO'
        idade.innerHTML = 'Idade: 35 anos'
        camisa.innerHTML = 'Manto N°23'
        posicao.innerHTML = 'Zagueiro'
        
    } else if (value == 'leo') {
        img.style.display = 'block'
        img.src = 'imagens/leo.jpeg'
        nome.innerHTML = 'LEONARDO PEREIRA'
        idade.innerHTML = 'Idade: 27 anos'
        camisa.innerHTML = 'Manto N°4'
        posicao.innerHTML = 'Zagueiro'
        
    } else if (value == 'rodrigo') {
        img.style.display = 'block'
        img.src = 'imagens/rodrigo.jpeg'
        nome.innerHTML = 'RODRIGO CAIO COQUETTE RUSSO'
        idade.innerHTML = 'Idade: 29 anos'
        camisa.innerHTML = 'Manto N°3'
        posicao.innerHTML = 'Zagueiro'
        
    } else if (value == 'pablo') {
        img.style.display = 'block'
        img.src = 'imagens/pablo.jpeg'
        nome.innerHTML = 'PABLO CASTRO'
        idade.innerHTML = 'Idade: 31 anos'
        camisa.innerHTML = 'Manto N°30'
        posicao.innerHTML = 'Zagueiro'
        
    } else if (value == 'fabricio') {
        img.style.display = 'block'
        img.src = 'imagens/fabricio.jpeg'
        nome.innerHTML = 'FABRÍCIO BRUNO'
        idade.innerHTML = 'Idade: 26 anos'
        camisa.innerHTML = 'Manto N°15'
        posicao.innerHTML = 'Zagueiro'
        
    } else if (value == 'cleiton') {
        img.style.display = 'block'
        img.src = 'imagens/cleiton.jpeg'
        nome.innerHTML = 'CLEITON SANTANA DOS SANTOS'
        idade.innerHTML = 'Idade: 19 anos'
        camisa.innerHTML = 'Manto N°33'
        posicao.innerHTML = 'Zagueiro'
        
    } else if (value == 'noga') {
        img.style.display = 'block'
        img.src = 'imagens/noga.jpg'
        nome.innerHTML = 'GABRIEL RODRIGUES NOGA'
        idade.innerHTML = 'Idade: 21 anos'
        camisa.innerHTML = 'Manto N°41'
        posicao.innerHTML = 'Zagueiro'
        
    } else if (value == 'matheuzinho') {
        img.style.display = 'block'
        img.src = 'imagens/matheuzinho.jpeg'
        nome.innerHTML = 'MATHEUS FRANÇA SILVA'
        idade.innerHTML = 'Idade: 22 anos'
        camisa.innerHTML = 'Manto N°34'
        posicao.innerHTML = 'Lateral Direito'
        
    } else if (value == 'varela') {
        img.style.display = 'block'
        img.src = 'imagens/varela.jpg'
        nome.innerHTML = 'GUILLERMO VARELA OLIVERA'
        idade.innerHTML = 'Idade: 29 anos'
        camisa.innerHTML = 'Manto N°2'
        posicao.innerHTML = 'Lateral Direito'
        
    } else if (value == 'filipe') {
        img.style.display = 'block'
        img.src = 'imagens/filipe.jpeg'
        nome.innerHTML = 'FILIPE LUÍS KASMIRSKI'
        idade.innerHTML = 'Idade: 37 anos'
        camisa.innerHTML = 'Manto N°16'
        posicao.innerHTML = 'Lateral Esquerdo'
        
    } else if (value == 'ayrton') {
        img.style.display = 'block'
        img.src = 'imagens/ayrton.jpeg'
        nome.innerHTML = 'AYRTON LUCAS'
        idade.innerHTML = 'Idade: 25 anos'
        camisa.innerHTML = 'Manto N°6'
        posicao.innerHTML = 'Lateral Esquerdo'
        
    } else if (value == 'vidal') {
        img.style.display = 'block'
        img.src = 'imagens/vidal.jpg'
        nome.innerHTML = 'ARTURO ERASMO VIDAL PARDO'
        idade.innerHTML = 'Idade: 35 anos'
        camisa.innerHTML = 'Manto N°32'
        posicao.innerHTML = 'Volante'
        
    } else if (value == 'thiago') {
        img.style.display = 'block'
        img.src = 'imagens/thiago.jpeg'
        nome.innerHTML = 'THIAGO MAIA ALENCAR'
        idade.innerHTML = 'Idade: 25 anos'
        camisa.innerHTML = 'Manto N°8'
        posicao.innerHTML = 'Volante'
        
    } else if (value == 'pulgar') {
        img.style.display = 'block'
        img.src = 'imagens/pulgar.jpg'
        nome.innerHTML = 'ERICK ANTONIO PULGAR FARFÁN'
        idade.innerHTML = 'Idade: 29 anos'
        camisa.innerHTML = 'Manto N°5'
        posicao.innerHTML = 'Volante'
        
    } else if (value == 'gerson') {
        img.style.display = 'block'
        img.src = 'imagens/gerson.png'
        nome.innerHTML = 'GERSON SANTOS DA SILVA'
        idade.innerHTML = 'Idade: 25 anos'
        camisa.innerHTML = 'Manto N°20'
        posicao.innerHTML = 'Volante'
        
    } else if (value == 'everton') {
        img.style.display = 'block'
        img.src = 'imagens/everton.jpeg'
        nome.innerHTML = 'EVERTON AUGUSTO DE BARROS RIBEIRO'
        idade.innerHTML = 'Idade: 33 anos'
        camisa.innerHTML = 'Manto N°7'
        posicao.innerHTML = 'Meia'
        
    } else if (value == 'arrascaeta') {
        img.style.display = 'block'
        img.src = 'imagens/arrascaeta.jpeg'
        nome.innerHTML = 'GIORGIAN DANIEL DE ARRASCAETA BENEDETTI'
        idade.innerHTML = 'Idade: 28 anos'
        camisa.innerHTML = 'Manto N°14'
        posicao.innerHTML = 'Meia'
        
    } else if (value == 'victor') {
        img.style.display = 'block'
        img.src = 'imagens/victor.jpg'
        nome.innerHTML = 'VICTOR HUGO GOMES SILVA'
        idade.innerHTML = 'Idade: 18 anos'
        camisa.innerHTML = 'Manto N°29'
        posicao.innerHTML = 'Meia'
        
    } else if (value == 'frança') {
        img.style.display = 'block'
        img.src = 'imagens/franca.jpeg'
        nome.innerHTML = 'MATHEUS FRANÇA'
        idade.innerHTML = 'Idade: 18 anos'
        camisa.innerHTML = 'Manto N°42'
        posicao.innerHTML = 'Meia'
        
    } else if (value == 'gabi') {
        img.style.display = 'block'
        img.src = 'imagens/gabi.jpeg'
        nome.innerHTML = 'GABRIEL BARBOSA ALMEIDA'
        idade.innerHTML = 'Idade: 26 anos'
        camisa.innerHTML = 'Manto N°10'
        posicao.innerHTML = 'Atacante'
        
    } else if (value == 'pedro') {
        img.style.display = 'block'
        img.src = 'imagens/pedro.jpeg'
        nome.innerHTML = 'PEDRO GUILHERME ABREU DOS SANTOS'
        idade.innerHTML = 'Idade: 25 anos'
        camisa.innerHTML = 'Manto N°9'
        posicao.innerHTML = 'Atacante'
        
    } else if (value == 'cebola') {
        img.style.display = 'block'
        img.src = 'imagens/cebola.jpg'
        nome.innerHTML = 'EVERTON SOUSA SOARES'
        idade.innerHTML = 'Idade: 26 anos'
        camisa.innerHTML = 'Manto N°11'
        posicao.innerHTML = 'Atacante'
        
    } else if (value == 'bruno') {
        img.style.display = 'block'
        img.src = 'imagens/bruno.jpeg'
        nome.innerHTML = 'BRUNO HENRIQUE PINTO'
        idade.innerHTML = 'Idade: 32 anos'
        camisa.innerHTML = 'Manto N°27'
        posicao.innerHTML = 'Atacante'
        
    } else if (value == 'marinho') {
        img.style.display = 'block'
        img.src = 'imagens/marinho.jpeg'
        nome.innerHTML = 'MÁRIO SÉRGIO SANTOS COSTA'
        idade.innerHTML = 'Idade: 32 anos'
        camisa.innerHTML = 'Manto N°31'
        posicao.innerHTML = 'Atacante'
        
    }
}
