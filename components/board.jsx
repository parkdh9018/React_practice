import React, { useCallback, useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';

import Cell from './Cell';

const keyString = (i, j) => i.toString()+'_'+j.toString();

const Board = () => {

    const dispatch = useDispatch();

    const KeyboardAction = useCallback((e) => {

        switch(e.keyCode) {
            case 37: //left
                dispatch({type:'MOVE_LEFT_OR_RIGHT', dir:'LEFT'})
                break;
    
            case 40: //down
                dispatch({type:'MOVE_DOWN'})
                break;
    
            case 39: //right
                dispatch({type:'MOVE_LEFT_OR_RIGHT', dir:'RIGHT'})
                break;
    
            case 32: //rotate
                dispatch({type:'MOVE_ROTATE'})
                break;
    
            default:
                break;
        }
    
    },[])


    const {tableData, isGameStart, nextBlock} = useSelector(state => state);
    let timer;

    useEffect(() => {

        if (isGameStart === true){
            timer = setInterval(() => {

                if(nextBlock === true)
                    dispatch({type:'CREATE_BLOCK'})
                else
                    dispatch({type:'MOVE_DOWN'})

            }, 1000)
        }

        return () => {
            clearInterval(timer);
        }

    },[isGameStart,nextBlock])

    // useEffect(() => {

    //     if(isGameStart == true)
    //         dispatch({type:'ERASE_BLOCK'})

    // },[stopBlock])

    const stoptimer = () => {
        clearInterval(timer);
    }

    return (
        <>
        <div onKeyDown={KeyboardAction} tabIndex="0">
            {isGameStart && <table>
                {Array(tableData.length).fill().map((v, i) => {
                    return(
                        <tr key={i}>
                            {Array(tableData[0].length).fill().map((v, j) => 
                                    <Cell cellNum={tableData[i][j]} key={keyString(i,j)}/>
                            )}
                        </tr>

                    )
                })}
            </table>}
        </div>
        <button onClick={stoptimer}>stop</button>
        </>
    )
}

export default Board;