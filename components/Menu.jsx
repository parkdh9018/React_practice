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
        dispatch({type:'MOVE_DOWN_BLOCK'})
    })

    const move_leftClick = useCallback(() => {
        dispatch({type:'MOVE_LEFT'})
    })

    const move_rightClick = useCallback(() => {
        dispatch({type:'MOVE_RIGHT'})
    })

    return (
        <>
            <button onClick={startGameClick}>start</button>
            <button onClick={createBlockClick}>block</button>
            <button onClick={moveBlockClick}>move_down</button>
            <button onClick={move_leftClick}>move_left</button>
            <button onClick={move_rightClick}>move_right</button>

        </>
    )
};

export default Menu;