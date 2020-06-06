import {CHANGE_WINDOW, SET_SESSION} from "../../consts";

export const setShowingWindow = window =>  ({
    type: CHANGE_WINDOW,
    payload: window,
});

export const setSession = (sessionId, userId) => ({
    type: SET_SESSION,
    payload: {sessionId: sessionId, userId: userId},
});