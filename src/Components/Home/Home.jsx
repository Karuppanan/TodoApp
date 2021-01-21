import React from 'react';
import Header from './../Header';
import Body from './../Body';
import Footer from './../Footer';

import './Home.scss';

const Home = ( props ) => {
   
    return(
        <div className = "row app">
            <Header 
                inputTextRef = { props.inputTextRef }
                activeButton = { props.activeButton }
            />
            <Body 
                displayList = { props.displayList }
            />
            <Footer 
                onTextAdd = { props.onTextAdd }
                inputTextRef = { props.inputTextRef }
                setListInfoDisplay = { props.setListInfoDisplay }
                activeButton = { props.activeButton }
                displayList = { props.displayList }
            />
        </div>
    );

}

export default Home;