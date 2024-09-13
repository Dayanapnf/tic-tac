/**
 * Obs: O controle de estado principal da aplicação deve ser mantido neste hook
 */

import { useEffect, useState } from "react";

type Player = "X" | "O"; // Define o tipo Player como "X" ou "O"

const useGameState = () => {
  // Estado para o número de passos no jogo
  const [stepNumber, setStepNumber] = useState(0);

  // Estado para o tabuleiro do jogo, iniciado com 9 posições vazias
  const [currentBoard, setCurrentBoard] = useState<Array<Player | null>>(
    Array(9).fill(null)
  );

  // Estado para o jogador inicial, começando como "X"
  const [initialPlayer, setInitialPlayer] = useState<Player>("X");

  // Estado para o próximo jogador, que começa como o jogador inicial
  const [nextPlayer, setNextPlayer] = useState<Player>("X");

  // Efeito colateral para atualizar o próximo jogador sempre que o jogador inicial mudar
  useEffect(() => {
    setNextPlayer(initialPlayer);
  }, [initialPlayer]);

  // Função para calcular o movimento de um jogador
  const computeMove = (player: Player, squareId: number) => {
    // Atualiza o tabuleiro com o novo movimento
    setCurrentBoard((prevBoard) => {
      const newBoard = [...prevBoard];
      newBoard[squareId] = player; // Coloca o valor do jogador na posição do tabuleiro
      return newBoard;
    });

    // Alterna o próximo jogador entre "X" e "O"
    setNextPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));

    // Incrementa o número de passos
    setStepNumber((currentStepNumber) => currentStepNumber + 1);
  };

  // Função para reiniciar o jogo
  const restartGame = () => {
    // Reseta o tabuleiro, o número de passos e alterna o jogador inicial
    setCurrentBoard(Array(9).fill(null));
    setStepNumber(0);
    setNextPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
    setInitialPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
  };

  // Retorna o estado e as funções para manipulação do jogo
  return {
    nextPlayer,
    stepNumber,
    currentBoard,
    computeMove,
    restartGame
  };
};

export default useGameState;
