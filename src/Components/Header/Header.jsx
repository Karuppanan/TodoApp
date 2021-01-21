import React from 'react';
import './Header.scss'

const Header = (props) => {

    return (
        <div className='container header'>
            <div className="row">
                <div className="col text-center">
                    <h1 >THINGS TO DO</h1>
                </div>
            </div>
            <input
                ref={props.inputTextRef}
                className='text-input form-control'
                value={props.input}
                placeholder="Add New"
                onChange={props.onChange} />
        </div>

    );

}

export default Header;