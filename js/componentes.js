// Função para carregar e injetar componentes
async function carregarComponente(caminho, seletor) {
  try {
    //  Busca o conteudo do arquivo HTML (header.html ou footer.html)
    const resposta = await fetch(caminho);
    
    // Verifica se a resposta deu certo
    if (!resposta.ok) {
        throw new Error(`Erro ao carregar componente: ${caminho} (Status: ${resposta.status})`);
    }
    
    //  Converte a resposta em texto HTML
    const html = await resposta.text();
    
    //  Encontra o local na página e insere o HTML
    const container = document.querySelector(seletor);
    if (container) {
      container.innerHTML = html;
      
      //  Chamada de Função Adicional (para ativar a classe 'ativo' no menu)
      if (seletor === '#header-container') {
          ativarLinkAtivo();
      }
    }

  } catch (erro) {
    console.error(`Falha no componente ${caminho}:`, erro);
  }
}

// Função para garantir que o link da pagina atual no menu injetado fique azul/ativo
function ativarLinkAtivo() {
    const path = window.location.pathname.split('/').pop() || 'index.html'; 
    const links = document.querySelectorAll('#header-container a');
    
    links.forEach(link => {
        // Se o link corresponder ao arquivo atual, adiciona a classe CSS
        if (link.getAttribute('href') === path) {
            link.classList.add('ativo');
        }
    });
}