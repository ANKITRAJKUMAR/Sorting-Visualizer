import { createAction, handleActions } from "redux-actions";

const initialState = false;

export const SET_PAUSED = "SET_PAUSED";
export const setPaused = createAction(SET_PAUSED);

export const isPaused = handleActions({
  SET_PAUSED: (state, { payload }) => {
    return payload;
  },
}, initialState);
