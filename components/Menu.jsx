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
        
    })

    return (
        <>
            <button onClick={startGameClick}>start</button>
            <button onClick={createBlockClick}>block</button>
            <button onClick={moveBlockClick}>move</button>

        </>
    )
};

export default Menu;