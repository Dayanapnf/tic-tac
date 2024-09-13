import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Square from "./Square";
import styles from "./Square.module.css";

test("should render square with winning class", () => {
  render(<Square id={0} value="X" onClick={() => {}} isWinning={true} />);

  expect(screen.getByText("X")).toHaveClass(styles.winning);
});

test("should call onClick handler when square is clicked", () => {
  const onClickMock = jest.fn();
  render(<Square id={0} value="X" onClick={onClickMock} isWinning={false} />);
  screen.getByText("X").click();
  expect(onClickMock).toHaveBeenCalledTimes(1);
});
