import { combineReducers } from "redux"
import actionTypes from "../actions/type"

//Initial State
const initialState = {
    allApplications: [],
    selectedApp :{}
};
const notification = (state = initialState,action) => {
    const { type, payload } = action;
    switch (type) {
        case actionTypes.SET_ALL_APPLICATION:
            return { ...state, allApplications: payload }
        case actionTypes.SET_SELECTED_APP:
            return { ...state, selectedApp: payload }     
        default:
            return state;
    }
}

export default combineReducers({ notification })