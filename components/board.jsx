import React, { useCallback, useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';

import Cell from './Cell';

const keyString = (i, j) => i.toString()+'_'+j.toString();

const Home = () => {

    const dispatch = useDispatch();

    const KeyboardAction = useCallback((e) => {

        switch(e.keyCode) {
            case 37: //left
                dispatch({type:'MOVE_LEFT'})
                break;
    
            case 40: //down
                dispatch({type:'MOVE_DOWN'})
                break;
    
            case 39: //right
                dispatch({type:'MOVE_RIGHT'})
                break;
    
            case 32: //rotate
                dispatch({type:'MOVE_ROTATE'})
                break;
    
            default:
                break;
        }
    
    },[])


    const {tableData, isGameStart, nextBlock} = useSelector(state => state);


    useEffect(() => {

        let timer;
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

    return (
        <>
        <div onKeyDown={KeyboardAction} tabIndex="0">
            {isGameStart && <table>
                {Array(tableData.length).fill().map((v, i) => {
                    return(
                        <tr key={i}>
                            {Array(tableData[0].length).fill().map((v, j) => 
                                    <Cell rowIndex={i} colIndex={j} key={keyString(i,j)}/>
                            )}
                        </tr>

                    )
                })}
            </table>}
        </div>
        </>
    )
}

export default Home;