import React, { useCallback, useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';

const Intro = () => {

    const [hstate, setHstate] = useState("Tetris");
    const [buttonText, setButtonText] = useState("Start");
    const isGameStart = useSelector(state => state.isGameStart);

    const dispatch = useDispatch();
  
    const startGameClick = useCallback(() => {
        setHstate("Game Over");
        setButtonText("Restart");
        dispatch({type:'GAME_START'})
    });


    return (
        <div className='Intro' style={!isGameStart?{display:'block'}:{display:'none'}}>
                <h1>{hstate}</h1>
                <button onClick={startGameClick}>{buttonText}</button>
        </div>
    )
}

export default Intro;