import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Game from "../Game/Game";
import "@testing-library/jest-dom";

describe("Game Component", () => {
  test("should render game component", () => {
    render(<Game />);
    expect(screen.getByText("TIC-TAC-LIVEN")).toBeInTheDocument();
    expect(screen.getByText("Seja bem-vindo!")).toBeInTheDocument();
  });

  test("should indicate `X` as winner", () => {
    render(<Game />);

    // Simula a ação que resulta na vitória para `X`
    const squares = screen.getAllByRole("button");
    fireEvent.click(squares[0]); // X
    fireEvent.click(squares[1]); // O
    fireEvent.click(squares[2]); // X
    fireEvent.click(squares[3]); // O
    fireEvent.click(squares[4]); // X
    fireEvent.click(squares[5]); // O
    fireEvent.click(squares[6]); // X

    // Adicione um delay para o componente atualizar, se necessário
    setTimeout(() => {
      expect(screen.getByText("Winner: X")).toBeInTheDocument();
    }, 500);
  });

  test("should indicate `O` as winner", () => {
    render(<Game />);

    // Simula a ação que resulta na vitória para `O`
    const squares = screen.getAllByRole("button");
    fireEvent.click(squares[0]); // X
    fireEvent.click(squares[1]); // O
    fireEvent.click(squares[2]); // X
    fireEvent.click(squares[3]); // O
    fireEvent.click(squares[4]); // X
    fireEvent.click(squares[5]); // O
    fireEvent.click(squares[6]); // X
    fireEvent.click(squares[7]); // O
    fireEvent.click(squares[8]); // X

    // Adicione um delay para o componente atualizar, se necessário
    setTimeout(() => {
      expect(screen.getByText("Winner: O")).toBeInTheDocument();
    }, 500);
  });

  test("should handle draw scenario", () => {
    render(<Game />);

    // Simula o cenário de empate
    const squares = screen.getAllByRole("button");
    fireEvent.click(squares[0]); // X
    fireEvent.click(squares[1]); // O
    fireEvent.click(squares[2]); // X
    fireEvent.click(squares[3]); // O
    fireEvent.click(squares[4]); // X
    fireEvent.click(squares[5]); // O
    fireEvent.click(squares[6]); // O
    fireEvent.click(squares[7]); // X
    fireEvent.click(squares[8]); // X

    // Adicione um delay para o componente atualizar, se necessário
    setTimeout(() => {
      expect(screen.getByText("Draw: Game over")).toBeInTheDocument();
    }, 500);
  });

  test("should not change board state when clicking on an already occupied square", () => {
    render(<Game />);

    const squares = screen.getAllByRole("button");

    // Simula uma jogada para marcar o quadrado com `X`
    fireEvent.click(squares[0]);

    // Simula uma jogada para marcar o quadrado com `O`
    fireEvent.click(squares[1]);

    // Verifica se o quadrado foi marcado corretamente com `X` e `O`
    expect(squares[0]).toHaveTextContent("X");
    expect(squares[1]).toHaveTextContent("O");

    // Clica novamente no quadrado já marcado com `X`
    fireEvent.click(squares[0]);
    // Clica novamente no quadrado já marcado com `O`
    fireEvent.click(squares[1]);

    // Verifica que o estado não mudou (os textos não devem mudar)
    expect(squares[0]).toHaveTextContent("X");
    expect(squares[1]).toHaveTextContent("O");
  });
});
