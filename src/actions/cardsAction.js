import { CONSTANTS } from "../actions";

export const addCard = (listID, text) => {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: { text, listID }
  };
};

export const removeCard = (listID, text) => {
  return {
    type: CONSTANTS.REMOVE_CARD,
    payload: {text, listID}
  }
}
