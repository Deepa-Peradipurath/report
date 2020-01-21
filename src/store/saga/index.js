import { all,put,takeEvery } from "redux-saga/effects";
import { getAllApplication,fetchData,
    getAllReportsData,
    updateStatusData,
    samplePayloadData,
    addNotificationAPI,
    channelListAPI,
    notificationListAPI
  } from "../../api/endpoints";
import actions from "../actions";

function*  getAllApplications(){
    console.log('Get all application is called...');
    try {
        const data = yield getAllApplication().then(dataFromApi => dataFromApi.data);
        yield put (actions.setAllApplication(data));

    } catch (error) {
        console.log(error);
    }
}

function* getAllNotificationTemplateData(payload) {
    try {
      const data = yield fetchData(payload).then(
        dataFromApi => dataFromApi.data
      );
      if(payload.payload.tab === "notification"){
        yield put(actions.setAllNotificationData(data));
      }
      else {
        yield put(actions.setAllTempData(data));
      }
    } catch (error) {
      if(payload.payload.tab === "notification"){
        yield put(actions.setAllNotificationData([]));
      }
      else {
        yield put(actions.setAllTempData([]));
      }      
    }
  }

function* getAllReports(payload) {
    try {
      const data = yield getAllReportsData(payload).then(
        dataFromApi => dataFromApi.data
      );
      yield put(actions.setAllReports(data));
    } catch (error) {
      yield put(actions.setAllReports([]));
    }
  } 
 
function* updateStatus(payload) {
try {
    const data = yield updateStatusData(payload).then(
    dataFromApi => dataFromApi.data
    );
    yield put(actions.statusUpdateSuccess(true));
console.log(data)
    alert("success");

} catch (error) {
    yield put(actions.statusUpdateSuccess(false));
    alert(error.message);
}
} 

function* getPAyload(payload) {
    try {
      const data = yield samplePayloadData(payload).then(
        dataFromApi => dataFromApi.data
      );
      yield put(actions.setSamplePayload(data));

  
    } catch (error) {
        yield put(actions.setSamplePayload([]));
        alert(error.message);
    }
  }
  function* addNotification(payload) {
    try {
      const data = yield addNotificationAPI(payload).then(
        dataFromApi => dataFromApi.data
        
      );    
      console.log(data)

    } catch (error) {
        alert(error.message);
    }
  }

  function* getChannelList(payload) {
    try {
      const data = yield channelListAPI(payload).then(
        dataFromApi => dataFromApi.data
        
      );    
      yield put(actions.setChannelList(data));

    } catch (error) {
        alert(error.message);
    }
  }
  
  function* getNotificationList(payload) {
    try {
      const data = yield notificationListAPI(payload).then(
        dataFromApi => dataFromApi.data
        
      );    
      yield put(actions.setNotificationList(data));    
    } catch (error) {
        alert(error.message);
    }
  }
export default function* rootSaga(){
    yield all([
        takeEvery("GET_ALL_APPLICATION", getAllApplications),
        takeEvery("GET_ALL_REPORTS", getAllReports),
        takeEvery("GET_ALL_NOT_TMP_DATA", getAllNotificationTemplateData),
        takeEvery("STATUS_UPDATE", updateStatus),
        takeEvery("GET_SAMPLE_PAYLOAD", getPAyload),
        takeEvery("ADD_NOTIFICATION", addNotification),
        takeEvery("EDIT_NOTIFICATION", addNotification),
        takeEvery("GET_ALL_CHANNEL", getChannelList),
        takeEvery("GET_NOTIFICATION_LIST", getNotificationList),

    ]);
}