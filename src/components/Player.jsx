import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setName] = useState(initialName);

  function handleName(event) {
    //console.log(event.target)

    setName(event.target.value);
  }

  function handleEdit() {
    //setIsEditing(!isEditing)//-> schedules a state update to true
    //setIsEditing(!isEditing)//-> schedule a state update to true as this also have isEditng state as false

    setIsEditing((isEditing) => !isEditing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }

    console.log(playerName);
  }

  let editablePlayerName = (
    <span className={isEditing ? "player-name" : ""}>{playerName}</span>
  );
  //let buttonCaption="Edit" //alternative way to dynamically put button caption

  if (isEditing) {
    editablePlayerName = (
      <input
        onChange={handleName}
        type="text"
        required
        value={playerName}
      ></input>
    );
    //buttonCaption="Save"
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
