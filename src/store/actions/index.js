import actionTypes from "./type"

const actions = {
    getAllApplication : data => ({type : actionTypes.GET_ALL_APPLICATION ,payload : data}),
    setAllApplication : data => ({type : actionTypes.SET_ALL_APPLICATION ,payload : data}),
    getSelectedApp : data => ({ type: actionTypes.GET_SELECTED_APP, selectedAppInfo: data}),
    setSelectedApp : data => ({ type: actionTypes.SET_SELECTED_APP, payload: data})
}

export default actions