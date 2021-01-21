import { 
    getListInfo,
    getUpdateCheckBoxStatus,
    getListAdd
} from './actions';

const dispatchGetListInfo = dispatch => () => {
    dispatch(getListInfo());
}

const dispatchUpdateCheckBoxStatus = dispatch => ( updateRowId ) => {
    dispatch(getUpdateCheckBoxStatus(updateRowId))
}

const dispatchListInofAdd = dispatch => ( text ) => {
    dispatch(getListAdd(text))
}


const operations = {
    dispatchGetListInfo,
    dispatchUpdateCheckBoxStatus,
    dispatchListInofAdd
    
}

export default operations;