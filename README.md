📘 Pokésite 
Uma aplicação web feita com React que permite explorar uma lista de Pokémon, visualizar detalhes individuais, pesquisar por nome e favoritar os seus preferidos. Os dados são obtidos da PokéAPI.

🔍 Funcionalidades
Paginação da lista de Pokémon (10 por página)

Pesquisa de Pokémon por nome

Marcar Pokémon como favorito (armazenado no localStorage)

Exibição de detalhes de um Pokémon: nome, imagem, altura, HP, ataque e defesa

Toasts de feedback para sucesso e erro

🧱 Tecnologias
React (useState, useEffect, useMemo)

Styled Components

PokéAPI

Toast customizado

LocalStorage

Create React App

▶️ Como rodar o projeto

Clone este repositório:
git clone https://github.com/seu-usuario/pokesite.git
cd pokesite

Instale as dependências:
npm install

Rode o projeto:
npm start

📌 Observações
A pesquisa por nome aceita apenas correspondência total se o nome existir na lista dos Pokémon (limitada por 1400 registros).

Os favoritos são salvos no navegador e persistem entre sessões.

📃 Licença
Este projeto está licenciado sob a MIT License.
