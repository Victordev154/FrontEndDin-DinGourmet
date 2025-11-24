Din Din Gourmet da Marcia | Projeto Web Estático

Integrante

Nome: Victor Holanda de Araujo


Tema, Objetivo e Justificativas do Negócio ;

O projeto é um site estático e vendável para Din Din Gourmet da Marcia, um pequeno negócio de venda de din dins artesanais, focado na alta qualidade e em sabores diferenciados.
    O principal objetivo é servir como vitrine digital e cardápio online para aumentar a visibilidade da marca na região e facilitar a conversão de vendas, direcionando o cliente para o pedido direto via WhatsApp.
Opúblico alvo são os Moradores da vizinhança, familias, estudantes de uma escola próxima e qualquer pessoa buscando uma sobremesa artesanal e refrescante.
O site transforma o negocio informal em uma marca profissional, permitindo que a Marcia expanda sua área de entrega e diversifique o menu, aumentando significativamente o volume de vendas.


aqui p Link do Protótipo Detalhado no Figma:
https://www.figma.com/design/TSklPc1BNIT9tomcJyHjQX/DinDin-Gourmet-da-Marcia?node-id=0-1&p=f&t=P3PoY5WeD0Q7t1HI-0


A estrutura de pastas de Front-End para organizar o código.
/dindin-gourmet-marcia/ psta principal

componentes/ aqui uma ´pasta crida para a modulairzação, guardando um html e um body pode apenas injetar no codigo depois de forma limpa e deixando mais organizado e menor o código 
(footer.html , header.html e nav.html)

css/ aqui ficam a estilização do projeto e o responsive.css os media queries usado para adaptação de telas maiores ou menores
(style.css, style.min.css e responsive.css)

docs/ guardar prints do site funcionando em diferentes navegadores
(testes-navegadores)

img/ aqui armazena os arquivos de foto utilizados no projeto
(Imagens do produto, logo)

js/ contem a lógica do site, tendo iteratividade para o site
(componentes.js, componentes.min.js e scroll-to-top.js)

/(raiz)/ aqui vai aonde o usuario acessa as 3 paginas principais
(index.html (Home) , cardapio.html (Cardápio) e contato.html (Contato))

README.md (Documentação) aqui a documentação do meu projeto

Justificativa das cores:

cor primaria Destaque Amarelo Vibrante. Justificativa: Cor que traz energia e alegria, usada para maximizar o destaque do botão de pedido (CTA) e gerar o desejo de compra.
cor Secundária : Azul Turquesa. Justificativa:Usada para remeter a frescor e energia, complementando o amarelo e dando conexao com a marca.

Tipografia
Títulos (Poppins): Fonte sem serifa, moderna e amigável ou chamativa. Justificativa: Escolhida para títulos (<h1>, <h2>) por sua alta legibilidade e pelo toque caseiro que combina com o produto artesanal.
Corpo do Texto Roboto / Open Sans, principalmente open sans, Justificativa: Fontes neutras e altamente legíveis em qualquer dispositivo móvel, garantindo a clareza das descrições e preços, que é o principal a ser lido.

Layout e Usabilidade:
Foco no WhatsApp:O site é estático, então a conversão é 100% focada no WhatsApp. 
Layout Mobile-First: O protótipo foi desenhado pensando na tela pequena. Justificativa pra isso: Garante que a Usabilidade e Experiência do Usuário (UX) sejam priorizadas, já que a maioria dos pedidos serão do celular.
 
 **(Projeto integraddor parte2)**
 1. (revisão)
 BOa parte do projeto já esta funcionando bem, sobre a repetição do HTML, o header e o footer e o botão do whatsapp se repete nas 3 paginas. Sobre a quebra de layout, quando o site éaberto em uma tela menor, a pagina home fica estranha na parte dos mais pedidos(as 3 imagens de demonstração ficam em camadas diferentes), o rodapé fica bem grande tambem, mas acho que não é um problema. Sobre mudanças para melhorar,  acho que eu colocaria um botão de whatsapp também na parte de baixo da tela, para que assim não desapareça nunca da tela do cliente, outra melhoria seria no mapa em (contato.html), não ficou do jeito que eu queria, tambem colocaria imagens para cada din-din na parte do cardapio para que aumente o desjo do comprador

 2.1 (componentes reutilizáveis)
o (<header>),(<nav>) e o (<footer>) são idênticos nas 3 páginas do site, a parte dos itens são muito repetidos, a seção de contatos são parecidas com algumas modificações

3. (Aprimoramento de Interatividade)
botei Efeitos de hover mais elaborados e adcionei um botão de voltar ao topo que pode contribuir ao usuário
caso ele esteja em um computador fica bem mais simples de ir para o topo da tela!

4.2 (Testar Acessibilidade)
Testei mover pelo site so com o teclado e deu certo, no teste de acessibilidade deu 92/100 , tudo certo ate então

5.1. (Revisar Layout em Diferentes Telas)
testei em várias telas e funcionou bem,nãoficou esteticamente bonito igual em uma tela grande mas em relação a funcionamento  ficou bom.

(MELHORIAS PARTE 2)
**Quais componentes?**
    Header Contendo a logo e o menu de navegação principal.
    Footer Contendo informações de contato, horários e links sociais.
* **Por que modularizar?**
    Reutilização: O código é escrito apenas uma vez e depois eu posso usar em todos (`header.html`, `footer.html`) sendo injetado automaticamente em todas as páginas.
**Organização:** O código das páginas principais (`index.html`, etc.) fica mais limpo e focado apenas no conteúdo específico daquela página.

**Semântica HTML5:** Uso correto de tags como `<header>`, `<main>`, `<nav>` e `<footer>` para leitores de tela.
**Texto Alternativo (Alt):** Todas as imagens de conteúdo possuem descrições claras no atributo `alt`.
**Navegação por Teclado:**
 **Foco Visível:** Implementação de contorno (`outline`) personalizado no CSS para indicar onde o foco está ao usar a tecla `Tab`.
**Skip Link:** Adição de um link oculto "Pular para o conteúdo principal" para agilizar a navegação.
**Formulários:** Uso explícito de `<label>` associado aos `inputs` para garantir a leitura correta dos campos.

(Integrações Externas)


Formspree: Integração no formulário de contato para envio real de e-mails sem necessidade de servidor.
Google Maps: adcinoei (`iframe`) do mapa real de localização na página de contato.
WhatsApp API: Botões de CTA , com links diretos (`wa.me`) que abrem a conversa já com uma mensagem pré-definida.

**PLANO DE MELHORIA/PROXIMOS PASSOS**

ajustar o header, ajustar o mapa


**Resumo das Três Partes do Projeto**
PARTE1
Definição do escopo do negócio ("Din Din Gourmet da Marcia") e seu público-alvo.

Criação do protótipo no Figma, definindo paleta de cores e tipografia.

Codificação do HTML e CSS inicial.

PARTE2
introdução ao JavaScript e manipulação do DOM.

Implementação de botão de clique (botão que altera o slogan) e de mouse (hover com zoom nas imagens dos dindins).

Criação do botão funcional "Voltar ao Topo" e "pular para o conteudo principal".

PARTE3
Focou em modularização e responsividade avançada, componentes.js, compontes para manter o código limpo, separando o header e o footer

acessibilidade usando skip link e Vlibras , adição do favicon...


**Acesso ao Site com:**

https://victordev154.github.io/FrontEndDin-DinGourmet/

data de publicação : 7/11/2025

Print do Site Din Din Gourmet - (img\Captura-de-tela-2025-11-22-000014.webp)

Foi adicionado ao projeto o CSS Minifier e o faivicon

**Testes Realizados**

foram testados no Google Chrome e no Mozilla firefox
Foram testados com a resolução do Iphone SE, Iphone 12 pro, ipad, ipad pro, desktop hd, desktop full hd
Aqui o link da pasta com as prints: C:\Users\victo\OneDrive\Documentos\dindin-gourmet-marcia\docs

**6.1. Reflexão Individual**


**Aprendizados Técnicos:**

- Quais foram as principais habilidades técnicas que você desenvolveu? Consegui aprimorar minhas habilidadee de HTML e CSS, entendi  a importância de ter um código limpo e bem organizado, desenvolvi habilidades com o github, e a importancia de ter um README.md em um projeto.

- Qual foi a tecnologia ou conceito mais desafiador de aprender? sem dúvids o javaScript, que foi algo novo que eu tive que implementar nesse projeto

- O que você domina melhor agora comparado ao início do projeto? melhorei muito no HTML em questão de organização , hierarquia. Aprimorei muito na ferramenta do github também.


**Desafios Enfrentados:**

- Qual foi o maior desafio do projeto? mnter a organização dos códigos e das pastas, porque eram muitas, implementar javaScript, aprender a dominar o github

- Se pudesse voltar no tempo, o que faria diferente? Comentaria desde o início cada trecho de código, facilitando meu entendimento depois.

**6.2. Reflexão da dupla(fiz sozinho)**

o projeto evoluiu  bastante desde a parte  1 , tendo em vista que foi aplicado JS, melhores mudanças feitas foi no meu head que estava desorganizado e diferente entre as 3 paginas, usando componentes ficou muito mais fácil de organizar e mexer no código, ajudou muito. Na minha cabeça meu projeto atendeu o que foi esperado. 
Com os feedbacks, consegui ter uma outra visão ,uma outra persepção do que foi feito no meu projeto, então consegui ter uma outra opinião sobre o que eu tinha feito, a principio foram mais elogios do que críticas, acredito que em projetos futuros consigo aplicar essas dicas/críticas 
Acredito que é um site bem estrutura e agregaria em um comércio pequeno, diria que seria um apoio enorme ao vendedor. Usaria esse projeto de portifolio não só por ser meu primeiro, mas porque mostra minha evolução e funções que eu aprendi

**Próximos Passos e Melhorias Futuras**

Implementar um carrinho de compras seria algo  útil e legal
modo escuro também seria interessante 
frameworks

conhecimento e aprofundar:

animações CSS
manipular API's
frmeworks modernos
entender melhor wcag