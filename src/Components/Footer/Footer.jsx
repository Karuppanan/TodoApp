import React from 'react';
import { FaSearch } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import './Footer.scss';

const Footer = (props) => {

    return (
        <div className='container footer'>
            <div className="row">
                <div className="col-lg-5 col-md-12">
                    <div className="">
                        <div className="row">
                            <div className="col-lg-3 col-md-2 col-sm-4  col-xs-4">
                                <span className='add-text' onClick={props.onTextAdd}><FiPlus /><span className="tooltiptext">Add Text</span></span>
                                &nbsp;&nbsp;&nbsp;
                                <span className='search-text' onClick={props.onSearchText}><FaSearch /><span className="tooltiptext">Search</span></span>
                            </div>
                            <div className="col-lg-9 col-md-10 col-sm-8 col-xs-8 items-col">
                                <span className="items-left">
                                    {props.activeRowCount} Items left
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="offset-lg-3 col-lg-4 col-md-12 menu-options">
                    <div>
                        <div className="row text-center">
                            <div className={props.activeButton === 'All' ? "col active" : 'col'} onClick={props.setAllDisplayListInfo}>
                                <span>All</span>
                            </div>
                            <div className={props.activeButton === 'Active' ? "col active" : 'col'} onClick={props.setActiveDispalyListInfo}>
                                <span>Active</span>
                            </div>
                            <div className={props.activeButton === 'Completed' ? "col active" : 'col'} onClick={props.setCompleteDisplayInfo}>
                                <span>Complete</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default Footer;