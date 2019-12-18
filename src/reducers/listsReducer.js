import { CONSTANTS } from "../actions";
let listID = 2;
let cardID = 0;
const initialState = [
  {
    title: "Doing",
    id: 0,
    cards: []
  },
  {
    title: "In Progress",
    id: 1,
    cards: []
  },
  {
    title: "Upstream",
    id: 2,
    cards: []
  }
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: listID
      };
      listID += 1;
      return [...state, newList];

    case CONSTANTS.ADD_CARD:
      const newCard = {
        text: action.payload.text,
        id: cardID
      };
      cardID += 1;

      const newState = state.map(list => {
        if (list.id == action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard]
          };
        } else {
          return list;
        }
      });

      return newState;

    default:
      return state;
  }
};

export default listsReducer;
