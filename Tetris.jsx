import React from 'react';
import { Provider } from 'react-redux';

import Board from './components/board'
import Menu from './components/Menu';
import NextBlock from './components/NextBlock';
import store from './store/configureStore'
const Tetris = () => {

   
    return (
        <Provider store={store}>
            <Board/>
            <Menu/>
            <NextBlock/>
        </Provider>
    )
}

export default Tetris;