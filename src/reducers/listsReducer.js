import { CONSTANTS } from "../actions";

let listID = 3;
let cardID = 6;

const initialState = [
  {
    title: "Doing",
    id: "list-${0}",
    cards: [
      {
        id: "card-${0}",
        text: "Testing dnd"
      }
    ]
  },
  {
    title: "In Progress",
    id: "list-${1}",
    cards: [
      {
        id: "card-${1}",
        text: "In progress card test"
      }
    ]
  },
  {
    title: "Upstream",
    id: "list-${2}",
    cards: [
      {
        id: "card-${2}",
        text: "upstream card test"
      }
    ]
  }
];

// action specifications
const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST: {
      const newList = {
        title: action.payload,
        cards: [],
        id: "list-${listID}"
      };
      listID += 1;
      return [...state, newList];
    }

    case CONSTANTS.ADD_CARD: {
      const newCard = {
        text: action.payload.text,
        id: "card-${cardID}"
      };
      cardID += 1;

      const newState = state.map(list => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard]
          };
        } else {
          return list;
        }
      });

      return newState;
    }

    case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
        draggableId,
        type
      } = action.payload;

      const newState = [...state];

      // dragging lists background
      if (type === "list") {
        const list = newState.splice(droppableIndexStart, 1);
        newState.splice(droppableIndexEnd, 0, ...list);
        return newState;
      }

      //same list movement
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find(list => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }

      // between lists

      if (droppableIdStart !== droppableIdEnd) {
        // find list where dnd happened
        const listStart = state.find(list => droppableIdStart === list.id);

        // pull out card
        const card = listStart.cards.splice(droppableIndexStart, 1);

        // drag end position
        const listEnd = state.find(list => droppableIdEnd === list.id);

        //place card
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }

      return newState;

    default:
      return state;
  }
};

export default listsReducer;
