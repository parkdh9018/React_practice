import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

const Menu = () => {

    const dispatch = useDispatch();

    const startGameClick = useCallback(() => {
        dispatch({type:'GAME_START'})
    });

    return (
        <>
            <button onClick={startGameClick}>start</button>
        </>
    )
};

export default Menu;