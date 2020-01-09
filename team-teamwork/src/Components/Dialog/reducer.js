const initialState = {
  text: []
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TEXT":
      return {
        ...state,
        text: [action.payload, ...state.text]
      };
    default:
      return state;
  }
};

export default dialogReducer;
