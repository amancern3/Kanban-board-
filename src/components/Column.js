import React from "react";
import Card from "./Card";
import ActionButton from "./ActionButton";
import { Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
// Essentially a list container, named as column for convience to sepp from actions.

const ListContainer = styled.div `
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  height: 100%;
  margin-left:44px;
  margin-right: 8px;
`;

const Column = ({ title, cards, listID, index}) => {
  console.log(cards);
  return (
    <Draggable draggableId={String(listID)} index={index}>
      {provided => (
        <ListContainer
          {...provided.draggableProps}
          ref = {provided.innerRef}
          {...provided.dragHandleProps}
        >
          <Droppable droppableId={String(listID)}>
            {provided => (
              <div {...provided.droppableProps} ref = {provided.innerRef}>
                <h4> {title} </h4>
                {cards.map((card, index) =>(
                  <Card
                    key = {card.id}
                    index = {index}
                    text = {card.text}
                    id = {card.id}
                  />
                ))}
                <ActionButton listID = {listID} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          </ListContainer>
      )}
    </Draggable>
  );
};

export default Column;