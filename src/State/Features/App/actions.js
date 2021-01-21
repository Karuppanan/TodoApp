import {
    GET_LIST_INFO,
    SET_LIST_INFO,
    GET_UPDATE_STATUS_ROW,
    SET_UPDATE_STATUS_ROW,
    GET_LIST_ADD,
    SET_LIST_ADD,
    SET_OPERATION_FLAG
} from './types';

const getListInfo = () =>{
    return ({
        type: GET_LIST_INFO,
    })
} 

const setListInfo = ( listInfo ) => ({
    type: SET_LIST_INFO,
    listInfo
});

const getUpdateCheckBoxStatus = ( updateRowId ) => {
    return ({
        type:GET_UPDATE_STATUS_ROW,
        updateRowId
    })
}

const setUpdateCheckBoxStatus = (updateRowId) => {
    return ({
        type:SET_UPDATE_STATUS_ROW,
        updateRowId
    })
}

const getListAdd = ( text ) => ({
    type : GET_LIST_ADD,
    text
})

const setListAdd = ( row ) => ({
    type : SET_LIST_ADD,
    row
});

const setOpeartaionStatus = ( flag ) => ({
    type : SET_OPERATION_FLAG,
    flag
});



export {
    getListInfo,
    setListInfo,
    getUpdateCheckBoxStatus,
    setUpdateCheckBoxStatus,
    getListAdd,
    setListAdd,
    setOpeartaionStatus

}