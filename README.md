<div align="center">
<img src="https://user-images.githubusercontent.com/71513260/151648758-ff040416-e554-4311-aa01-aaf090964b6d.png" width="600" height="400"/>
</div>

# TIC-TAC

TIC-TAC é uma versão moderna do Jogo da Velha. O objetivo é permitir partidas entre dois jogadores com a capacidade de reiniciar o jogo e calcular vencedores e empates corretamente. O projeto inclui funcionalidades para reiniciar o tabuleiro, controle de estado e implementação de testes para garantir a qualidade do código.

## Estrutura do Projeto

- **`src/components`** - Componentes reutilizáveis.
- **`src/pages`** - Páginas principais, incluindo `Game` e `Documentação`.
- **`src/hooks`** - Hooks personalizados.
- **`src/utils`** - Funções utilitárias.
- **`public`** - Arquivos estáticos.

## Funcionalidades

- **Jogo**: Permite jogar, reiniciar e alternar entre jogadores. Quando um jogador vence, os campos que ele marcou ficam destacados em verde. Um botão de reinício aparece para permitir que o usuário jogue novamente.
- **Sobre**: Fornece detalhes sobre o projeto.

## Resumo das Soluções

1. **Consertar a Implementação 🛠️**: Corrigida a lógica para garantir que o estado do jogo seja atualizado corretamente e que o cálculo de resultados seja preciso.
   
2. **Incremento de Funcionalidades 🚩**: Adicionada uma funcionalidade para reiniciar o jogo e alternar o jogador inicial entre as partidas.

3. **Qualidade de Código e Testes 🧪**: Adicionados typings corretos para análise estática e testes para cobrir cenários críticos, como vitórias, empates, e controle de estado.

## Testes

- Vitória do jogador ❌
- Vitória do jogador ⭕
- Empate
- Estado do tabuleiro ao clicar duas vezes
- Outros cenários relevantes

## Paleta de Cores

A paleta de cores utilizada no TIC-TAC-LIVEN foi escolhida para garantir uma boa visibilidade e uma experiência de usuário agradável:

- **Branco** (#fff)
- **Cinza Claro** (#fffe)
- **Verde** (#00FF00)
- **Vermelho** (rgb(211, 23, 23))
- **Azul Escuro** (#17045d)
- **Preto** (#000)

## Responsividade

O TIC-TAC foi desenvolvido com foco na responsividade, garantindo que a aplicação funcione corretamente em diferentes tamanhos de tela. O layout se ajusta para proporcionar uma boa experiência de usuário tanto em dispositivos móveis quanto em telas maiores.

## Melhorias Futuras

- Implementar modos de jogo adicionais.
- Adicionar animações ou efeitos visuais.

---

Este projeto foi desenvolvido para proporcionar uma experiência intuitiva e divertida no clássico Jogo da Velha, com foco em boas práticas de desenvolvimento e qualidade de código.
