import {
    put,
    takeEvery,
    all
} from 'redux-saga/effects';

import { v4 as uuidv4 } from 'uuid';

import {
    GET_LIST_INFO,
    GET_UPDATE_STATUS_ROW,
    GET_LIST_ADD

} from './types';
import * as appActions from './actions';

function* getListInfo(){
    try{
        let listInfoData = [
            {
                text: 'Learn Javascript',
                status : 'Active',
                key: uuidv4()
            },
            {
                text: 'Learn React',
                status : 'Active',
                key: uuidv4()
            },
            {
                text: 'Build a React App',
                status : 'Completed',
                key: uuidv4()
            }
        ]
        yield put( appActions.setListInfo(listInfoData) );
    }
    catch(error) {
        console.log(error)
    }
}

function* updateCheckBoxStatus(data) {
    try{
        yield put( appActions.setUpdateCheckBoxStatus(data.updateRowId) );
    }
    catch(error){
        console.log(error);
    }
}


function* getListInfoAdd( data ) {
    try{
        yield put ( appActions.setOpeartaionStatus(false));
        let row = {
            text : data.text,
            status: 'Active',
            key: uuidv4()
        }
        yield put( appActions.setListAdd(row) );
        yield put ( appActions.setOpeartaionStatus(true));
    }
    catch(error){
        console.log(error);
    }
}

function* watchUpdateCheckBoxStatus(){
    yield takeEvery( GET_UPDATE_STATUS_ROW, updateCheckBoxStatus )
}

function* watchgetListInfo() {
    yield takeEvery( GET_LIST_INFO, getListInfo )
}

function* watchAddListInfo() {
    yield takeEvery( GET_LIST_ADD, getListInfoAdd )
}

export default function* combinedSaga() {
    yield all([
        watchgetListInfo(),
        watchUpdateCheckBoxStatus(),
        watchAddListInfo()
    ]);
}