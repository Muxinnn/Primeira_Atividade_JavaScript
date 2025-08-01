// Inicializando o contador de pontos
let contadorPontos = 0;

// Criando um novo elemento para exibir a quantidade de pontos
let pontosElemento = document.createElement('h1');
pontosElemento.innerText = `Contador de pontos: ${contadorPontos}`;
document.body.appendChild(pontosElemento);

// Criando os botões para cestas de 2 e 3 pontos
let cestaDoisButton = document.createElement('button');
cestaDoisButton.innerText = 'Fazer uma cesta de 2 pontos';
document.body.appendChild(cestaDoisButton);

let cestaTresButton = document.createElement('button');
cestaTresButton.innerText = 'Fazer uma cesta de 3 pontos';
document.body.appendChild(cestaTresButton);

// Estilizando a página
document.body.style.fontFamily = 'Arial, sans-serif';
document.body.style.textAlign = 'center';
document.body.style.marginTop = '50px';

// Estilizando os elementos
pontosElemento.style.color = 'purple';
pontosElemento.style.fontSize = '36px';
cestaDoisButton.style.padding = '10px 20px';
cestaTresButton.style.padding = '10px 20px';
cestaDoisButton.style.fontSize = '18px';
cestaTresButton.style.fontSize = '18px';
cestaDoisButton.style.cursor = 'pointer';
cestaTresButton.style.cursor = 'pointer';
cestaDoisButton.style.backgroundColor = '#fdd835'; // Cor amarela
cestaTresButton.style.backgroundColor = '#388e3c'; // Cor verde

// Função para simular a cesta de 2 pontos
cestaDoisButton.addEventListener('click', function() {
    contadorPontos += 2; // A cada clique, adiciona 2 pontos
    pontosElemento.innerText = `Contador de pontos: ${contadorPontos}`;
});

// Função para simular a cesta de 3 pontos
cestaTresButton.addEventListener('click', function() {
    contadorPontos += 3; // A cada clique, adiciona 3 pontos
    pontosElemento.innerText = `Contador de pontos: ${contadorPontos}`;
});
