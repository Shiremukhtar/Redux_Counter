import { actionTypes } from "../constants/action-types";

const countReducer = (state = 0, { type }) => {

    switch (type) {
        case actionTypes.INCREMENT:
            return state + 100;
        case actionTypes.DECREMENT:
        return state - 100
        default:
            return state;
    }

}

export default countReducer;