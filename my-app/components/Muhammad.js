"use client";

import { useState } from "react";

export default function Muhammad() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("X");

  const handleClick = (index) => {
    if (board[index] === "" && !checkWin()) { // Only allow move if no winner
      const newBoard = [...board];
      newBoard[index] = player;
      setBoard(newBoard);
      setPlayer(player === "X" ? "O" : "X");

      // Check for winner or tie after the move
      const result = checkWin();
      if (result) {
        console.log("Result detected:", result); // Debug log
        alert(result === "tie" ? "It's a tie!" : `Player ${result} wins!`); // Alert for winner or tie
      }
    }
  };

  const checkWin = () => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6], // diagonals
    ];

    // Check for a winner
    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      console.log(`Checking pattern [${a}, ${b}, ${c}]: ${board[a]}, ${board[b]}, ${board[c]}`); // Debug log
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]; // Return "X" or "O" if there's a winner
      }
    }

    // Check for a tie: board is full and no winner
    if (board.every(cell => cell !== "")) {
      return "tie"; // Return "tie" if all cells are filled
    }

    return null; // No winner or tie
  };

  const result = checkWin(); // Check winner or tie for UI display

  return (
    <>
      <table className="w-full">
        <tbody>
          <tr>
            <td><button className="border-2 w-12 h-12" onClick={() => handleClick(0)}>{board[0] || " "}</button></td>
            <td><button className="border-2 w-12 h-12" onClick={() => handleClick(1)}>{board[1] || " "}</button></td>
            <td><button className="border-2 w-12 h-12" onClick={() => handleClick(2)}>{board[2] || " "}</button></td>
          </tr>
          <tr>
            <td><button className="border-2 w-12 h-12" onClick={() => handleClick(3)}>{board[3] || " "}</button></td>
            <td><button className="border-2 w-12 h-12" onClick={() => handleClick(4)}>{board[4] || " "}</button></td>
            <td><button className="border-2 w-12 h-12" onClick={() => handleClick(5)}>{board[5] || " "}</button></td>
          </tr>
          <tr>
            <td><button className="border-2 w-12 h-12" onClick={() => handleClick(6)}>{board[6] || " "}</button></td>
            <td><button className="border-2 w-12 h-12" onClick={() => handleClick(7)}>{board[7] || " "}</button></td>
            <td><button className="border-2 w-12 h-12" onClick={() => handleClick(8)}>{board[8] || " "}</button></td>
          </tr>
        </tbody>
      </table>
      {result && (
        <p className="mt-4 text-xl">
          {result === "tie" ? "It's a tie!" : `Player ${result} wins!`}
        </p>
      )} {/* Display winner or tie */}
    </>
  );
}