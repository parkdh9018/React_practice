import React from 'react';
import { Provider } from 'react-redux';
import Board from './components/board'
import store from './store/configureStore'

const Tetris = () => {

    return (
        <Provider store={store}>
            <Board/>
        </Provider>
    )
}

export default Tetris;