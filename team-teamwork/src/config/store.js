import { createStore, combineReducers } from "redux";
import playerReducer from "../features/player/reducer";
import mapReducer from "../features/map/reducer";
import dialogReducer from "../Components/Dialog/reducer";
import inventoryReducer from "../Components/Inventory/reducer";
import storeReducer from "../Components/store/reducer"

const rootReducer = combineReducers({
  player: playerReducer,
  map: mapReducer,
  dialog: dialogReducer,
  inventory: inventoryReducer,
  store: storeReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
