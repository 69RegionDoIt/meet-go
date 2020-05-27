import {CHANGE_WINDOW} from "../../consts";

export const setShowingWindow = window =>  ({
    type: CHANGE_WINDOW,
    payload: window,
});