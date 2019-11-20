import React from "react"
import Card from "./Card"

export default ({
  column,
  columnIndex,
  onMoveRight,
  onMoveLeft,
  onAddCard,
  onRemoveCard
}) => (
  <div className="column">
    <h1>{column.name}</h1>
    {column.cards.map((card, cardIndex) => (
      <Card
        key={cardIndex}
        card={card}
        cardIndex={cardIndex}
        canMoveLeft={columnIndex !== 0}
        canMoveRight={columnIndex !== 2}
        onMoveLeft={() => onMoveLeft(cardIndex)}
        onMoveRight={() => onMoveRight(cardIndex)}
        canRemoveCard = {columnIndex == 0}
      />
    ))}
    <button onClick={onAddCard}>+</button>
    <button onClick={onRemoveCard}>-</button>

  </div>
)
