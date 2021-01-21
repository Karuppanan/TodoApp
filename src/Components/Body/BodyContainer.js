import React from 'react';
import Body from './Body';

import { useDispatch } from 'react-redux';

import appOperation from './../../State/Features/App/operations';

const BodyContainer = (props) => {

    const dispatch = useDispatch();
    const updateCheckBoxStatus = appOperation.dispatchUpdateCheckBoxStatus(dispatch);

    const onCheckBoxChange = (e) => {
        updateCheckBoxStatus(e.target.name);
    }

    return (
        <>
            <Body
                displayList={props.displayList}
                onCheckBoxChange={onCheckBoxChange}
            />
        </>
    );

}

export default BodyContainer;