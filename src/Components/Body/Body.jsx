import React from 'react';
import CheckBox from "./../CommonComponents/CheckBox";
import './Body.scss';

const Body = (props) => {

  const list = props.displayList ? props.displayList : [];

  return (
    <div className='app-body'>
      {
        list.map((data) =>
          <div key={data.key} className="item-row">
            <CheckBox
              Checked={data.status === 'Completed'}
              onCheckBoxChange={props.onCheckBoxChange}
              checkBoxName={data.key}
              disabled={false}
            />
              &nbsp;&nbsp;
              <span className={data.status === 'Completed' ? 'strike-out' : 'row-text'}>{data.text}</span>
          </div>
        )
      }

    </div>
  );

}

export default Body;