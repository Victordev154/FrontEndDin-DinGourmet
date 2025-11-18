// Função para carregar e injetar componentes de forma assíncrona
async function carregarComponente(caminho, seletor) {
  try {
    // 1. Busca o conteúdo do arquivo HTML
    const resposta = await fetch(caminho);
    
    // Verifica se a resposta deu certo
    if (!resposta.ok) {
        throw new Error(`Erro ao carregar componente: ${caminho} (Status: ${resposta.status})`);
    }
    
    // 2. Converte a resposta em texto HTML
    const html = await resposta.text();
    
    // 3. Encontra o local na página e insere o HTML
    const container = document.querySelector(seletor);
    if (container) {
      container.innerHTML = html;
      
      // Se carregou o Header, chama a função para arrumar o menu
      if (seletor === '#header-container') {
          ativarLinkAtivo();
      }
    }

  } catch (erro) {
    console.error(`Falha no componente ${caminho}:`, erro);
  }
}

// Função CORRIGIDA para ativar o link do menu
function ativarLinkAtivo() {
    // Pega o nome do arquivo atual (ex: contato.html)
    let path = window.location.pathname.split('/').pop();
    
    // Se o path estiver vazio (raiz do site), considera que é index.html
    if (path === '') path = 'index.html';

    const links = document.querySelectorAll('#header-container a');
    
    links.forEach(link => {
        // 1. LIMPEZA: Remove a classe 'ativo' de todos os links primeiro
        link.classList.remove('ativo');
        
        // 2. VERIFICAÇÃO: Se o link for igual ao arquivo atual, adiciona a classe
        if (link.getAttribute('href') === path) {
            link.classList.add('ativo');
        }
    });
}