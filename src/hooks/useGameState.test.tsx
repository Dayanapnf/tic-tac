import { render, act } from "@testing-library/react";
import useGameState from "./useGameState";

const TestComponent = () => {
  const gameState = useGameState();

  return (
    <div>
      <div data-testid="next-player">{gameState.nextPlayer}</div>
      <div data-testid="step-number">{gameState.stepNumber}</div>
      <div data-testid="board">{JSON.stringify(gameState.currentBoard)}</div>
      <button data-testid="restart-button" onClick={gameState.restartGame}>
        Jogar novamente
      </button>
      {gameState.currentBoard.map((_, index) => (
        <button
          key={index}
          data-testid={`move-button-${index}`}
          onClick={() => gameState.computeMove(gameState.nextPlayer, index)}
        >
          Move {index}
        </button>
      ))}
    </div>
  );
};

describe("useGameState", () => {
  // Testa se o primeiro jogador é X ao iniciar o componente
  it("should initialize with X as the first player", () => {
    const { getByTestId } = render(<TestComponent />);
    expect(getByTestId("next-player").textContent).toBe("X");
  });

  // Testa a alternância do jogador inicial após reiniciar o jogo
  it("should alternate the initial player after restart", () => {
    const { getByTestId } = render(<TestComponent />);
    // Primeiro reinício
    act(() => {
      getByTestId("restart-button").click();
    });
    expect(getByTestId("next-player").textContent).toBe("O"); // Alternado para "O"

    act(() => {
      getByTestId("restart-button").click();
    });
    expect(getByTestId("next-player").textContent).toBe("X"); // Alternado para "X"
  });

  // Testa se a jogada do jogador é refletida corretamente no estado do tabuleiro
  it("should handle player moves", () => {
    const { getByTestId } = render(<TestComponent />);
    act(() => {
      getByTestId("move-button-0").click(); // Simula o movimento
    });
    expect(getByTestId("board").textContent).toBe(
      JSON.stringify(["X", null, null, null, null, null, null, null, null])
    );
    expect(getByTestId("next-player").textContent).toBe("O"); // Jogador alternado após a jogada
  });

  // Testa se o jogo é reiniciado corretamente, incluindo a alternância do jogador
  it("should restart the game correctly", () => {
    const { getByTestId } = render(<TestComponent />);
    act(() => {
      getByTestId("move-button-0").click(); // Simula o movimento
      getByTestId("restart-button").click(); // Simula o reinício do jogo
    });
    expect(getByTestId("board").textContent).toBe(
      JSON.stringify(Array(9).fill(null))
    );
    expect(getByTestId("step-number").textContent).toBe("0"); // Passos resetados após reinício
    expect(getByTestId("next-player").textContent).toBe("O"); // Jogador alternado após o reinício
  });
});
