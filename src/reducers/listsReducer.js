const initialState = [
  {
    title: "Doing",
    id: 1,
    cards: [
      {
        id: 0,
        text: 'hello'
      },
      {
        id: 1,
        text: 'sup'
      }
    ]
  },
  {
    title: "In Progress",
    id: 1,
    cards: [
      {
        id: 0,
        text: 'maybe'
      }
    ]
  },
{
  title: "Upstream",
  id: 2,
  cards: [
    {
      id: 0,
      text: 'font is too big'
    }
  ]
}
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
    return state;
  }
};

export default listsReducer;
