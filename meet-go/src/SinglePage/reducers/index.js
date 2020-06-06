import {CHANGE_WINDOW, SET_SESSION} from "../../consts";

export const initialState = {
    showingWindow: 0,
    sessionId: '',
    userId: '',
};

export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_WINDOW:
            return {...state, showingWindow: action.payload};
        case SET_SESSION:
            return {
                ...state,
                sessionId: action.payload.sessionId,
                userId: action.payload.userId,
            };
        default:
            return state;
    }
}