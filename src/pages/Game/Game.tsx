import React from "react";
import Board from "../../components/Board/Board";
import useGameState from "../../hooks/useGameState";
import calculateWinner from "../../utils/calculateWinner";
import styles from "../Game/Game.module.css";

const Game: React.FC = () => {
  // Obtém o estado do jogo e funções auxiliares do hook useGameState
  const { currentBoard, stepNumber, nextPlayer, computeMove, restartGame } =
    useGameState();

  // Calcula o vencedor atual do jogo
  const winner = calculateWinner(currentBoard);

  // Verifica se o jogo terminou, seja por vitória ou empate
  const isGameOver = winner || (stepNumber === 9 && !winner);

  // Obtém os quadrados vencedores, se houver um vencedor
  const winningSquares = winner ? winner.line : [];

  // Função chamada quando um quadrado é clicado
  const handleSquareClick = (squareId: number) => {
    // Não faz nada se o jogo acabou ou o quadrado já estiver preenchido
    if (isGameOver || currentBoard[squareId]) {
      return;
    }
    // Calcula o próximo movimento com base no jogador atual
    computeMove(nextPlayer, squareId);
  };

  // Função que gera a mensagem de status do jogo
  const renderStatusMessage = () => {
    const winner = calculateWinner(currentBoard);
    if (winner) {
      // Mensagem de vitória se houver um vencedor
      return "Winner: " + winner.winner;
    } else if (stepNumber === 9 && !winner) {
      // Mensagem de empate se o jogo terminou em empate
      return "Draw: Game over";
    } else {
      // Mensagem de próximo jogador
      return "Next player: " + (nextPlayer === "X" ? "❌" : "⭕");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>
          TIC-TAC-LIVEN{" "}
          <span role="img" aria-label="rocket">
            🚀
          </span>
        </h1>
        <p>Seja bem-vindo!</p>
      </div>

      <div className={styles.gameArea}>
        <div>
          <Board
            squares={currentBoard}
            onSquareClick={handleSquareClick}
            winningSquares={winningSquares}
          />
        </div>

        <div className={styles.game_info}>
          <div>Current step: {stepNumber}</div>
          <div>{renderStatusMessage()}</div>
          {isGameOver && (
            <button
              onClick={restartGame}
              className={styles.btn}
              aria-label="Jogar Novamente"
            >
              Jogar novamente
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Game;
