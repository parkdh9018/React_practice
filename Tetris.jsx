import React from 'react';
import { Provider } from 'react-redux';
import Board from './components/board'
import Menu from './components/Menu';
import store from './store/configureStore'

const Tetris = () => {

   
    return (
        <Provider store={store}>
            <Board/>
            <Menu/>
        </Provider>
    )
}

export default Tetris;