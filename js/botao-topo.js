const btnTopo = document.getElementById("btnVoltarAoTopo");

// A distância de rolagem em pixels para o botão aparecer
const distanciaParaAparecer = 300; 

// visibilidade do botão
function scrollFunction() {
    // Se a posição de rolagem vertical Y for maior que 300px
    if (document.body.scrollTop > distanciaParaAparecer || document.documentElement.scrollTop > distanciaParaAparecer) {
        btnTopo.style.display = "block"; // Faz o botão aparecer
    } else {
        btnTopo.style.display = "none"; // Mantém o botão escondido
    }
}

// Adiciona o listener para o evento de rolagem
window.onscroll = function() {
    scrollFunction();
};

// Função que leva o usuário para o topo (quando o botão é clicado)
btnTopo.addEventListener('click', () => {
    // Rola suavemente para o topo do documento
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});