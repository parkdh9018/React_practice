import React, { useCallback, useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';

const Intro = () => {

    const [hstate, setHstate] = useState("Tetris");
    const [buttonText, setButtonText] = useState("Start");
    const [scoreText, setScoreText] = useState("");

    const isGameStart = useSelector(state => state.isGameStart);
    const score = useSelector(state => state.score);

    const dispatch = useDispatch();
  
    const startGameClick = useCallback(() => {
        setHstate("Game Over");
        setButtonText("Restart");
        setScoreText("Score : "+ score)
        dispatch({type:'GAME_START'})
    });




    return (
        <div className='Intro' style={!isGameStart?{display:'block'}:{display:'none'}}>
                <h1>{hstate}</h1>
                <div>{scoreText}</div>
                <button onClick={startGameClick}>{buttonText}</button>
        </div>
    )
}

export default Intro;