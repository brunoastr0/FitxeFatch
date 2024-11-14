# React + TypeScript + Vite

# Relatório do Código - FitxeFatch

## Introdução

O código apresentado refere-se a um aplicativo de FitxeFatch desenvolvido em **React** utilizando **TypeScript**. A aplicação permite dois jogadores se enfrentarem no tradicional FitxeFatch, onde os jogadores podem interagir com o tabuleiro, fazer movimentos e verificar o vencedor.

---

## Estrutura do Código

O código é composto por três componentes principais:

1. **App**: Componente principal onde o estado do jogo é gerido e onde os outros componentes são renderizados.
2. **Player**: Componente que representa cada jogador, permitindo que o nome de cada jogador seja alterado.
3. **Table**: Componente que exibe o tabuleiro do jogo e permite que os jogadores interajam com ele.
4. **GameOver**: Componente que exibe a mensagem de "Game Over" com a informação de quem ganhou ou se houve empate, além de um botão para reiniciar o jogo.

---

## Explicação Detalhada do Código

### **Componente `App`**

O componente `App` é o componente principal que gerencia o estado do jogo e a lógica de troca de jogadores, vitória e reinício do jogo. Ele possui os seguintes estados:

- **`currentPlayer`**: Controla o jogador atual, podendo ser `"x"` ou `"o"`.
- **`gameStatus`**: Armazena o status do jogo (quem venceu ou se houve empate).
- **`player1Name`** e **`player2Name`**: Armazenam os nomes dos jogadores.
- **`board`**: Armazena o estado do tabuleiro como uma lista de 9 elementos, representando os 9 quadrados do tabuleiro (inicialmente vazios).

O código também define as funções:

- **`switchPlayer`**: Alterna entre os jogadores. Se o jogador atual for `"x"`, muda para `"o"`, e vice-versa.
- **`resetGame`**: Reinicia o jogo, limpando o tabuleiro, resetando o status do jogo e reiniciando os nomes dos jogadores.

### **Componente `Player`**

O componente `Player` permite que cada jogador insira e edite seu nome. Ele recebe os seguintes props:

- **`name`**: Nome do jogador.
- **`setPlayername`**: Função para atualizar o nome do jogador.
- **`symbol`**: O símbolo que o jogador usa no tabuleiro, que pode ser `"x"` ou `"o"`.

O componente usa um campo de input para o nome e exibe o símbolo do jogador ao lado.

### **Componente `Table`**

O componente `Table` exibe o tabuleiro do jogo, que é composto por 9 quadrados. Ele recebe as seguintes props:

- **`currentPlayer`**: Determina qual jogador está fazendo a jogada.
- **`onMove`**: Função chamada após cada movimento, alternando o jogador.
- **`gameStatus`**: Status atual do jogo (vencedor ou empate).
- **`setGameStatus`**: Função para atualizar o status do jogo.
- **`player1Name`** e **`player2Name`**: Nomes dos jogadores.
- **`board`**: Estado atual do tabuleiro.
- **`setBoard`**: Função para atualizar o estado do tabuleiro.

No tabuleiro, quando um jogador clica em uma célula vazia, ela é preenchida com o símbolo do jogador atual ( `"x"` ou `"o"`) e, em seguida, verifica se há um vencedor.

A lógica de verificação de vitória é feita por meio de uma função que verifica todas as combinações possíveis de vitória (linhas, colunas e diagonais). Se houver um vencedor, o jogo é finalizado e o status é atualizado.

### **Componente `GameOver`**

O componente `GameOver` exibe a mensagem de quem venceu ou se houve empate. Ele recebe os seguintes props:

- **`winner`**: Nome do vencedor ou a mensagem de empate.
- **`onRestart`**: Função para reiniciar o jogo.

Quando o jogo acaba, o componente exibe uma mensagem com o vencedor e um botão para reiniciar o jogo, chamando a função `resetGame` quando pressionado.

---

## Funcionalidades do Jogo

1. **Alternância de Jogadores**: O jogo alterna entre os jogadores `"x"` e `"o"`. O jogador `"x"` sempre começa.
2. **Verificação de Vitória**: O jogo verifica automaticamente se um dos jogadores venceu após cada movimento, verificando as linhas, colunas e diagonais.
3. **Empate**: Caso o tabuleiro seja preenchido e não haja vencedor, o jogo exibe uma mensagem de empate.
4. **Reinício do Jogo**: Após o término do jogo (vitória ou empate), o usuário pode reiniciar o jogo clicando no botão "Reiniciar Jogo".

---

## Como Rodar o Jogo

Para rodar o jogo localmente, siga os seguintes passos:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/brunoastr0/FitxeFatch.git
   ```

# Instalaçao

**Instale as dependências**: Navegue até o diretório do projeto e instale as dependências com o comando:

```sh
npm install
```

# Execuçao

**Execute o projeto**: Execute o servidor de desenvolvimento:

```sh
npm run dev
```
