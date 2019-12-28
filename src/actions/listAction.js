import { CONSTANTS } from "../actions";

export const addList = title => {
  return {
    type: CONSTANTS.ADD_LIST,
    payload: title
  };
};

export const removeList = title => {
  return {
    type: CONSTANTS.REMOVE_LIST, 
    payload: title
  }
}

// list sorting DnD
export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
  type
) => {
  return {
    type: CONSTANTS.DRAG_HAPPENED,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      draggableId,
      type
    }
  };
};
