import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

const Menu = () => {

    const dispatch = useDispatch();

    const startGameClick = useCallback(() => {
        dispatch({type:'GAME_START'})
    });

    const createBlockClick = useCallback(() => {
        dispatch({type:'CREATE_BLOCK'})
    })

    const moveBlockClick = useCallback(() => {
        dispatch({type:'MOVE_DOWN'})
    })

    const move_leftClick = useCallback(() => {
        dispatch({type:'MOVE_LEFT'})
    })

    const move_rightClick = useCallback(() => {
        dispatch({type:'MOVE_RIGHT'})
    })

    const rotateClick = useCallback(() => {
        dispatch({type:'MOVE_ROTATE'})
    })

    return (
        <>
            <button onClick={startGameClick}>start</button>
            <button onClick={createBlockClick}>block_create</button>
            <button onClick={moveBlockClick}>move_down</button>
            <button onClick={move_leftClick}>move_left</button>
            <button onClick={move_rightClick}>move_right</button>
            <button onClick={rotateClick}>rotate</button>

        </>
    )
};

export default Menu;