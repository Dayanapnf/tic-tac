import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Board from "./Board";
import Square from "../Square/Square";
import styles from "../Square/Square.module.css";

describe("Board Component", () => {
  const squares = Array(9).fill(null);
  const onSquareClick = jest.fn();

  // Testa se todos os quadrados são renderizados
  test("should render all squares", () => {
    // Renderiza o componente Board com props básicas
    render(
      <Board
        squares={squares}
        onSquareClick={onSquareClick}
        winningSquares={[]}
      />
    );

    for (let i = 0; i < 9; i++) {
      expect(screen.getByTestId(`square-${i}`)).toBeInTheDocument();
    }
  });

  // Testa se os quadrados vencedores são destacados corretamente
  test("should highlight winning squares", () => {
    const winningSquares = [0, 1, 2]; // Índices dos quadrados vencedores
    render(
      <Board
        squares={["X", "X", "X", null, null, null, null, null, null]} // Preenche alguns quadrados com "X" para simular uma linha vencedora
        onSquareClick={onSquareClick}
        winningSquares={winningSquares} // Define os quadrados vencedores
      />
    );

    // Verifica se cada quadrado vencedor possui a classe de destaque
    winningSquares.forEach((index) => {
      expect(screen.getByTestId(`square-${index}`)).toHaveClass(styles.winning);
    });
  });

  // Testa se a função de clique é chamada corretamente quando um quadrado é clicado
  test("should call onClick handler when a square is clicked", () => {
    render(
      <Board
        squares={squares}
        onSquareClick={onSquareClick}
        winningSquares={[]} // Nenhum quadrado é vencedor neste teste
      />
    );

    // Simula o clique no quadrado com o índice 0
    fireEvent.click(screen.getByTestId("square-0"));

    // Verifica se a função onSquareClick foi chamada com o índice 0
    expect(onSquareClick).toHaveBeenCalledWith(0);
  });
});
