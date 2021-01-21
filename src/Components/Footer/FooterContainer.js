import React, { shallowEqual } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import appSelector from './../../State/Features/App/selectors';
import appOperation from './../../State/Features/App/operations';

import { filterByKeyWord } from './../HelperFunctions/filterHelper';

import Footer from './Footer';
const FooterContainer = (props) => {

    const {
        listInfo
    } = useSelector(
        state => ({
            listInfo: appSelector.listInfo(state)

        }),
        shallowEqual,
    );

    const dispatch = useDispatch();
    const addListInfo = appOperation.dispatchListInofAdd(dispatch);

    const onTextAdd = () => {
        if (props.inputTextRef.current.value && props.inputTextRef.current.value !== '') {
            let text = props.inputTextRef.current.value;
            addListInfo(text);
        }
    }

    const onSearchText = () => {
        let displayList = []
        if (props.inputTextRef.current.value && props.inputTextRef.current.value !== '') {
            let text = props.inputTextRef.current.value;
            displayList = props.displayList.filter((data) => data.text.toLowerCase().includes(text.toLowerCase()));
        }
        else {
            displayList = [...listInfo]
        }
        props.setListInfoDisplay(displayList);
    }

    const setAllDisplayListInfo = () => {
        let displayList = [...listInfo];
        props.setListInfoDisplay(displayList, 'All');
    }

    const setActiveDispalyListInfo = () => {
        let displayList = filterByKeyWord(listInfo, 'Active', 'status')
        props.setListInfoDisplay(displayList, 'Active');

    }

    const setCompleteDisplayInfo = () => {
        let displayList = filterByKeyWord(listInfo, 'Completed', 'status')
        props.setListInfoDisplay(displayList, 'Completed');
    }

    let activeRowCount = listInfo && listInfo.length > 0 ? filterByKeyWord(listInfo, 'Active', 'status').length : 0;

    return (
        <Footer
            onTextAdd={onTextAdd}
            setAllDisplayListInfo={setAllDisplayListInfo}
            setActiveDispalyListInfo={setActiveDispalyListInfo}
            setCompleteDisplayInfo={setCompleteDisplayInfo}
            activeButton={props.activeButton}
            onSearchText={onSearchText}
            activeRowCount={activeRowCount}
        />
    );

}

export default FooterContainer;