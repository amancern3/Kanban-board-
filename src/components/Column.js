import React from "react";
import Card from "./Card";
import ActionButton from "./ActionButton";
import { Droppable } from "react-beautiful-dnd";

const Column = ({ title, cards, listID }) => {
  console.log(cards);
  return (
    <Droppable dropppableID={String(listID)}>
      {provided => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={styles.container}
        >
          <h4> {title} </h4>
          {cards.map((card, index) => (
            <Card key={card.id} index={index} text={card.text} id={card.id} />
          ))}
          <ActionButton listID={listID} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

const styles = {
  container: {
    backgroundColor: "#dfe3e6",
    borderRadius: 3,
    width: 300,
    padding: 8,
    height: "100%",
    marginRight: 8
  }
};

export default Column;
