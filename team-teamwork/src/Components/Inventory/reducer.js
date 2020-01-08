const initialState = {
  items: []
};

const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_INV":
      return {
        ...action.payload
      };
    case "ADD_ITEM":
      return {
        ...state,
        items: action.payload
      };
    case "DROP_ITEM":
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
};

export default inventoryReducer;
