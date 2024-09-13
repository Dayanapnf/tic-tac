import React from "react";
import styles from "./About.module.css";

const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.header}>TIC-TAC-LIVEN</h1>

        <section>
          <h2>Introdução</h2>
          <p className={styles.paragraph}>
            TIC-TAC-LIVEN é uma versão moderna do Jogo da Velha. O objetivo é
            permitir partidas entre dois jogadores com a capacidade de reiniciar
            o jogo e calcular vencedores e empates corretamente. O projeto
            inclui funcionalidades para reiniciar o tabuleiro, controle de
            estado e implementação de testes para garantir a qualidade do
            código.
          </p>
        </section>

        <section>
          <h2>Estrutura do Projeto</h2>
          <ul>
            <li>
              <code>src/components</code> - Componentes reutilizáveis.
            </li>
            <li>
              <code>src/pages</code> - Páginas principais, incluindo{" "}
              <code>Game</code> e <code>Documentação</code>.
            </li>
            <li>
              <code>src/hooks</code> - Hooks personalizados.
            </li>
            <li>
              <code>src/utils</code> - Funções utilitárias.
            </li>
            <li>
              <code>public</code> - Arquivos estáticos.
            </li>
          </ul>
        </section>

        <section>
          <h2>Funcionalidades</h2>
          <ul>
            <li>
              <strong>Jogo</strong>: Permite jogar, reiniciar e alternar entre
              jogadores. Quando um jogador vence, os campos que ele marcou ficam
              destacados em verde. Quando o jogo termina, um botão de reinício
              aparece para permitir que o usuário jogue novamente.
              <div className={styles.imageWrapper}>
                <img
                  src="/tela-venceu.png"
                  alt="Tela de vitória do jogo"
                  className={styles.image}
                />
              </div>
            </li>
            <li>
              <strong>Sobre</strong>: Fornece detalhes sobre o projeto.
            </li>
          </ul>
        </section>
        <section>
          <h2>Resumo das Soluções</h2>
          <h3>1. Consertar a Implementação 🛠️</h3>
          <p className={styles.paragraph}>
            Identifiquei um bug no gerenciamento de estado do jogo, que estava
            impedindo a correta detecção de vencedores e empates. Corrigi a
            lógica para garantir que o estado do jogo fosse atualizado
            corretamente e que o cálculo de resultados fosse realizado de forma
            precisa.
          </p>

          <h3>2. Incremento de Funcionalidades 🚩</h3>
          <p className={styles.paragraph}>
            Adicionei uma funcionalidade para reiniciar o jogo após uma partida,
            implementando um botão de reinício. Também configurei a alternância
            automática do jogador inicial entre as partidas.
          </p>

          <h3>3. Qualidade de Código e Testes 🧪</h3>
          <p className={styles.paragraph}>
            Melhorei a qualidade do código adicionando typings corretos para
            análise estática e implementei testes para cobrir cenários críticos,
            como vitórias, empates e garantir que o estado do tabuleiro não seja
            alterado indevidamente.
          </p>
        </section>

        <section>
          <h2>Testes </h2>
          <ul>
            <li>Vitória do jogador ❌</li>
            <li>Vitória do jogador ⭕</li>
            <li>Empate</li>
            <li>Estado do tabuleiro ao clicar duas vezes</li>
            <li>Outros cenários relevantes</li>
          </ul>
        </section>
        <section>
          <h2>Paleta de Cores</h2>
          <p className={styles.paragraph}>
            A paleta de cores utilizada no TIC-TAC-LIVEN foi escolhida para
            garantir uma boa visibilidade e uma experiência de usuário
            agradável. As cores principais estão organizadas por tom e são:
          </p>
          <ul>
            <li>
              <div
                className={styles.colorSample}
                style={{ backgroundColor: "#fff" }}
              />
              <strong>Branco</strong> (#fff):
            </li>
            <li>
              <div
                className={styles.colorSample}
                style={{ backgroundColor: "#fffe" }}
              />
              <strong>Cinza Claro</strong> (#fffe):
            </li>{" "}
            <li>
              <div
                className={styles.colorSample}
                style={{ backgroundColor: "#00FF00" }}
              />
              <strong>Verde</strong> (#4caf50):
            </li>
            <li>
              <div
                className={styles.colorSample}
                style={{ backgroundColor: "rgb(211, 23, 23)" }}
              />
              <strong>Vermelho</strong> (rgb(211, 23, 23)):
            </li>
            <li>
              <div
                className={styles.colorSample}
                style={{ backgroundColor: "#17045d" }}
              />
              <strong>Azul Escuro</strong> (#17045d):
            </li>
            <li>
              {" "}
              <div
                className={styles.colorSample}
                style={{ backgroundColor: "#000" }}
              />
              <strong>Preto</strong> (#000):
            </li>
          </ul>

          <section>
            <h2>Responsividade</h2>
            <p className={styles.paragraph}>
              O TIC-TAC-LIVEN foi desenvolvido com foco na responsividade,
              garantindo que a aplicação funcione corretamente em diferentes
              tamanhos de tela. O layout se ajusta para proporcionar uma boa
              experiência de usuário tanto em dispositivos móveis quanto em
              telas maiores, como desktops e tablets. As mudanças de layout são
              realizadas de forma a manter a usabilidade e a estética do jogo em
              todas as resoluções.
            </p>
          </section>
        </section>

        <section>
          <h2>Melhorias Futuras</h2>
          <ul>
            <li>Implementar modos de jogo adicionais.</li>
            <li>Adicionar animações ou efeitos visuais.</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default About;
