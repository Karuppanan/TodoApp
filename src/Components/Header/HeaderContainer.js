import React, { useState, useEffect, shallowEqual } from 'react';
import { useSelector } from 'react-redux';

import Header from './Header';

import appSelector from './../../State/Features/App/selectors';

const HeaderContainer = (props) => {
  const [input, setInput] = useState('');

  const {
    operation
  } = useSelector(
    state => ({
      operation: appSelector.operation(state),
    }),
    shallowEqual,
  );

  useEffect(() => {
    if (operation.insertStatus) {
      cleanAndFocusInput();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [operation])

  useEffect(() => {
    cleanAndFocusInput();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.activeButton]);

  const cleanAndFocusInput = () => {
    setInput('');
    props.inputTextRef.current.focus();
  }

  const onChange = (e) => {
    let text = e.target.value;
    setInput(text);
  }

  return (
    <Header inputTextRef={inRef => props.inputTextRef.current = inRef} input={input} onChange={onChange} />
  );

}

export default HeaderContainer;