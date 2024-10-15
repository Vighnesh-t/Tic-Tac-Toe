
export default function GameBoard({ onSelectSquare ,board}) {
  

  // const[gameBoard,setGameBoard]=useState(initialGameBoard);

  // function handleSelectSquare(rowIndex,colIndex,){
  //     setGameBoard((prevGameBoard)=>{
  //         const updatedBoard=[...prevGameBoard.map((innerArray)=>[...innerArray])]
  //         updatedBoard[rowIndex][colIndex]=activePlayerSymbol;
  //         return updatedBoard;
  // })
  //onSelectSquare();
  //     }

  return (
    <table id="game-board">
        <tbody>
        {board.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((playerSymbol, colIndex) => (
            <td key={colIndex}>
              <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol!=null}>
                {playerSymbol}
              </button>
            </td>
          ))}
        </tr>
      ))}
        </tbody>
    </table>
  );
}
