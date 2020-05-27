import {CHANGE_WINDOW} from "../../consts";

export const initialState = {
    showingWindow: 0,
};

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_WINDOW:
            return {...state, showingWindow: action.payload};
        default:
            return state;
    }
}