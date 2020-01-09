import { CardActions } from "@material-ui/core";

const initialState = {
    items: []
}

const StoreReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_STORE":
            return {
                ...action.payload
            };
        case "BUY_ITEM":
            return {
                ...state,
                items: action.payload
            };
        case "SELL_ITEM":
            return {
                ...state,
                items: action.payload
            };
        default:
            return state;
    }
}

export default StoreReducer