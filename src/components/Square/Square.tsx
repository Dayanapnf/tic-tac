import React from "react";
import styles from "./Square.module.css";

interface SquareProps {
  id: number;
  value: string | null;
  onClick: () => void;
  isWinning?: boolean;
}

const Square: React.FC<SquareProps> = ({
  id,
  value,
  onClick,
  isWinning = false
}) => (
  <button
    data-testid={`square-${id}`}
    className={`${styles.square} ${isWinning ? styles.winning : ""}`}
    onClick={onClick}
  >
    {value}
  </button>
);

export default Square;
