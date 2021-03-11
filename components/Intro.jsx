import React, { useCallback } from 'react';
import {  useDispatch } from 'react-redux';

const Intro = () => {

    const dispatch = useDispatch();

    const startGameClick = useCallback(() => {
        dispatch({type:'GAME_START'})
    });

    return (
        <div className='Intro'>
                <h1>Tetris</h1>
                <button onClick={startGameClick}>start</button>
        </div>
    )
}

export default Intro;