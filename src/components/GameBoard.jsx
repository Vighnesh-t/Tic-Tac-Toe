import { useState } from "react";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard() {
    const[gameBoard,setGameBoard]=useState(initialGameBoard);


    function handleSelectSquare(rowIndex,colIndex,){
        setGameBoard((prevGameBoard)=>{
            prevGameBoard[rowIndex][colIndex]='X'
            return prevGameBoard;
    })

  return (
    <table id="game-board">
      {initialGameBoard.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((playerSymbol, colIndex) => (
            <td key={colIndex}>
              <button onClick={handleSelectSquare}>{playerSymbol}</button>
            </td>
          ))}
        </tr>
      ))}
    </table>
  );
}
