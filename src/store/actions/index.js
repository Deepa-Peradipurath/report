import actionTypes from "./type"

const actions = {
    getAllApplication : data => ({type : actionTypes.GET_ALL_APPLICATION ,payload : data}),
    setAllApplication : data => ({type : actionTypes.SET_ALL_APPLICATION ,payload : data}),

		getChannelList :  data => ({type : actionTypes.GET_ALL_CHANNEL ,payload : data}),
		setChannelList :  data => ({type : actionTypes.SET_ALL_CHANNEL ,payload : data}),

		getNotificationList :  data => ({type : actionTypes.GET_NOTIFICATION_LIST ,payload : data}),
		setNotificationList :  data => ({type : actionTypes.SET_NOTIFICATION_LIST ,payload : data}),


    getSelectedApp : data => ({ type: actionTypes.GET_SELECTED_APP, selectedAppInfo: data}),
    setSelectedApp : data => ({ type: actionTypes.SET_SELECTED_APP, payload: data}),

    getAllReports: data => ({ type: actionTypes.GET_ALL_REPORTS, payload: data }),
    setAllReports: data => ({ type: actionTypes.SET_ALL_REPORTS, payload: data }),

    setAllNotTempData : data => ({ type: actionTypes.SET_ALL_NOT_TMP_DATA, payload: data }),
    getAllNotTempData : data => ({ type: actionTypes.GET_ALL_NOT_TMP_DATA, payload: data }),

    setAllTempData: data => ({ type: actionTypes.SET_ALL_TMP_DATA, payload: data }),
    setAllNotificationData: data => ({ type: actionTypes.SET_ALL_NOT_DATA, payload: data }),


    statusUpdate:data => ({ type: actionTypes.STATUS_UPDATE, payload: data }),
    statusUpdateSuccess:data => ({ type: actionTypes.STATUS_UPDATE_SUCCESS, payload: data }),

    getSamplePayload:data => ({ type: actionTypes.GET_SAMPLE_PAYLOAD, payload: data }),
    setSamplePayload:data => ({ type: actionTypes.SET_SAMPLE_PAYLOAD, payload: data }),

    createNewNotification:data => ({ type: actionTypes.ADD_NOTIFICATION, payload: data }),
    editNotification:data => ({ type: actionTypes.EDIT_NOTIFICATION, payload: data }),
}

export default actions