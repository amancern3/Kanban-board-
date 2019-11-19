import React from "react"

export default ({card,
canMoveLeft,
canMoveRight,
onMoveLeft,
onMoveRight
}) => (
  <div className = "card">
    {canMoveLeft && <button onClick = {onMoveLeft}>{'<'}</button>}
    <span className = "title">{card.name}</span>
    {canMoveLeft && <button onClick = {onMoveRight}>{'>'}</button>}
  </div>
)
