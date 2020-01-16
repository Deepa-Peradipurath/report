import { all,put,takeEvery } from "redux-saga/effects";
import { getAllApplication } from "../../api/endpoints";
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

export default function* rootSaga(){
    yield all([
        takeEvery("GET_ALL_APPLICATION", getAllApplications)
    ]);
}