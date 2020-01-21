import { combineReducers } from "redux"
import actionTypes from "../actions/type"

//Initial State
const initialState = {
    allApplications: [],
    selectedApp :{},
    allTemplate: [],
    statusChanged: false
};
const notification = (state = initialState,action) => {
    const { type, payload } = action;
    switch (type) {
        case actionTypes.SET_ALL_APPLICATION:
            return { ...state, allApplications: payload }
        case actionTypes.SET_SELECTED_APP:
            return { ...state, selectedApp: payload } 
        case actionTypes.SET_ALL_TMP_DATA:
            return { ...state, tempData: payload }
        case actionTypes.SET_ALL_NOT_DATA:
              return { ...state, notData: payload }    
        case actionTypes.SET_ALL_NOT_TMP_DATA : 
            return{...state, notTempData: payload}
        case actionTypes.SET_ALL_REPORTS: 
            return {...state, allReport: payload }
        case actionTypes.STATUS_UPDATE_SUCCESS:
            return {...state, statusChanged: payload }
        case actionTypes.SET_SAMPLE_PAYLOAD:
						return {...state, samplePayload: payload }  
				case  actionTypes.SET_ALL_CHANNEL:
						return {...state, channelList: payload } 
				case  actionTypes.SET_NOTIFICATION_LIST:
						return {...state, notificationList: payload } 
        default:
            return state;
    }
}

export default combineReducers({ notification })