import React from 'react';
import './Checkbox.scss'

const CheckBox = (props) => {
    return (
        <input
            className='form-check-input custom-checkbox'
            type='checkbox'
            checked={props.Checked}
            onChange={props.onCheckBoxChange}
            name={props.checkBoxName}
            disabled={ props.disabled }
        />
    );
}

export default CheckBox;