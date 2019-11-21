const initialState = [
  {
    title: "Doing",
    id: 1,
    cards: [
      {

      }
    ]
  },
  {
    title: "In Progress",
    id: 1,
    cards: [
      {

      }
    ]
  },{
  title: "Upstream",
  id: 1,
  cards: [
    {

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
