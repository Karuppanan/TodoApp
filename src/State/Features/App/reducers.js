import {
    SET_LIST_INFO,
    SET_UPDATE_STATUS_ROW,
    SET_LIST_ADD,
    SET_OPERATION_FLAG
} from './types';

const reducers = ( state = {}, action ) => {
    switch(action.type){
        case SET_LIST_INFO : {
            const listInfo = action.listInfo;
            return{
                ...state, listInfo
            };
        }
        case SET_UPDATE_STATUS_ROW : {
            const updateRowId = action.updateRowId;
            let listInfo =[...state.listInfo];
            let index = listInfo.findIndex( data => data.key=== updateRowId );
            if(listInfo[index].status === 'Completed')
                listInfo[index].status = 'Active'
            else if(listInfo[index].status === 'Active')
                listInfo[index].status = 'Completed'
            return{
                ...state, listInfo
            };
        }
        case SET_LIST_ADD : {
            const row = action.row;
            let listInfo =  [...state.listInfo] ;
            listInfo.push(row);
            return{
                ...state, listInfo
            };
        }
        case SET_OPERATION_FLAG : {
            const operationFlag = action.flag
            let operation = { insertStatus : operationFlag }
            return{
                ...state, operation
            };
        }
        default : 
            return state;
    }
};

export default reducers;