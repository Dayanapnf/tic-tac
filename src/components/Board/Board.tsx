import React from "react";
import Square from "../Square/Square";
import styles from "./Board.module.css";

// Define a interface para as propriedades do componente Board
interface BoardProps {
  squares: Array<string | null>;
  onSquareClick: (id: number) => void;
  winningSquares?: number[];
}

const Board: React.FC<BoardProps> = ({
  squares,
  onSquareClick,
  winningSquares = []
}) => {
  // Função para renderizar um quadrado individual
  const renderSquare = (squareId: number) => {
    return (
      <Square
        id={squareId}
        value={squares[squareId]}
        onClick={() => onSquareClick(squareId)}
        isWinning={winningSquares.includes(squareId)}
      />
    );
  };

  return (
    <div className={styles.board}>
      {squares.map((_, index) => renderSquare(index))}
    </div>
  );
};

export default Board;
