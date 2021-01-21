import React, { useState, useEffect, shallowEqual, useRef } from 'react';
import { filterByKeyWord } from './../HelperFunctions/filterHelper';

import Home from './Home';

import { useSelector, useDispatch } from 'react-redux';

import appSelector from './../../State/Features/App/selectors';
import appOperation from './../../State/Features/App/operations';

const HomeContainer = () => {
  const [displayList, setDisplayList] = useState([]);
  const [activeButton, setActiveButton] = useState('All');

  const inputTextRef = useRef();

  const {
    listInfo
  } = useSelector(
    state => ({
      listInfo: appSelector.listInfo(state)

    }),
    shallowEqual,
  );

  const dispatch = useDispatch();
  const getListInfo = appOperation.dispatchGetListInfo(dispatch);

  useEffect(() => {

    inputTextRef.current.focus();
    getListInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (listInfo.length > 0) {
      let displayList = listInfo;
      if (activeButton !== 'All') {
        displayList = filterByKeyWord(listInfo, activeButton, 'status');
      }
      setListInfoDisplay(displayList, activeButton);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listInfo])


  const setListInfoDisplay = (displayList, activeBtn) => {
    setDisplayList(displayList);
    if (activeBtn) {
      setActiveButton(activeBtn)
    }
  }

  return (
    <Home
      displayList={displayList}
      inputTextRef={inputTextRef}
      setListInfoDisplay={setListInfoDisplay}
      activeButton={activeButton}

    />

  );

}

export default HomeContainer;