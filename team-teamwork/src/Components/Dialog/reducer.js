const initialState = {
  text: [
    "You entered the grasslands. Be careful!",
    "There is an axe available, pick it up if you choose.",
    "You are now carrying an axe! This should come in handy.",
    "To the North is some grasslands.",
    "To the South is a river.",
    "To the East is a dungeon.",
    "Which way would you like to go? Choose wisely.",
    "You entered the grasslands. Be careful!",
    "There is an axe available, pick it up if you choose.",
    "You are now carrying an axe! This should come in handy.",
    "To the North is some grasslands.",
    "To the South is a river.",
    "To the East is a dungeon.",
    "Which way would you like to go? Choose wisely.",
    "You entered the grasslands. Be careful!",
    "There is an axe available, pick it up if you choose.",
    "You are now carrying an axe! This should come in handy.",
    "To the North is some grasslands.",
    "To the South is a river.",
    "To the East is a dungeon.",
    "Which way would you like to go? Choose wisely."
  ]
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TEXT":
      return {
        ...state,
        text: [...state.text, action.payload]
      };
    default:
      return state;
  }
};

export default dialogReducer;
